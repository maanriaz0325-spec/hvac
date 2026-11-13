/**
 * IndexNow Submission Engine
 * Host: miamiairconditioningheatrepair.com
 * Handles URL detection, sitemap extraction, key verification, and IndexNow batch submission.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

const HOST = 'miamiairconditioningheatrepair.com';
const BASE_URL = `https://${HOST}`;
const REPO_ROOT = path.resolve(__dirname, '../..');

// Mask sensitive values in output
function mask(str) {
  if (!str || str.length < 8) return '****';
  return str.substring(0, 4) + '...' + str.substring(str.length - 4);
}

// 1. Resolve API Key securely
function getApiKey() {
  if (process.env.INDEXNOW_KEY && process.env.INDEXNOW_KEY.trim()) {
    return process.env.INDEXNOW_KEY.trim();
  }
  // Fallback: look for verification TXT file in root
  try {
    const files = fs.readdirSync(REPO_ROOT);
    for (const f of files) {
      if (/^[a-f0-9]{32}\.txt$/i.test(f)) {
        const content = fs.readFileSync(path.join(REPO_ROOT, f), 'utf8').trim();
        if (content && content === f.replace('.txt', '')) {
          return content;
        }
      }
    }
  } catch (err) {
    // Ignore error
  }
  return null;
}

// 2. Convert a relative file path to canonical production URL
function filePathToUrl(relPath) {
  const norm = relPath.replace(/\\/g, '/').replace(/^\/+/, '');
  
  // Must be an HTML page
  if (!norm.endsWith('.html')) return null;

  // Ignore non-public or temp files
  if (norm.startsWith('.') || norm.startsWith('node_modules/') || norm.startsWith('scripts/')) {
    return null;
  }

  if (norm === 'index.html') {
    return `${BASE_URL}/`;
  }

  // Remove .html extension for clean canonical URLs
  const cleanPath = norm.slice(0, -5);
  return `${BASE_URL}/${cleanPath}`;
}

// 3. Extract all URLs from sitemap.xml
function getSitemapUrls() {
  const sitemapPath = path.join(REPO_ROOT, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.warn('[IndexNow] sitemap.xml not found at', sitemapPath);
    return [];
  }
  const content = fs.readFileSync(sitemapPath, 'utf8');
  const matches = [...content.matchAll(/<loc>\s*(https:\/\/[^<\s]+)\s*<\/loc>/gi)];
  const urls = matches.map(m => m[1].trim());
  return Array.from(new Set(urls));
}

// 4. Detect changed HTML files from Git diff
function getChangedUrls(beforeSha, currentSha) {
  try {
    let diffOutput = '';
    
    // Check if git is available and repo has history
    if (beforeSha && beforeSha !== '0000000000000000000000000000000000000000') {
      diffOutput = execSync(`git diff --name-only ${beforeSha} ${currentSha || 'HEAD'}`, {
        cwd: REPO_ROOT,
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'ignore']
      });
    } else {
      // Fallback: compare with previous commit
      try {
        diffOutput = execSync('git diff --name-only HEAD~1 HEAD', {
          cwd: REPO_ROOT,
          encoding: 'utf8',
          stdio: ['pipe', 'pipe', 'ignore']
        });
      } catch (e) {
        // Fallback for shallow or single commit: list files in HEAD commit
        diffOutput = execSync('git log -1 --name-only --pretty=""', {
          cwd: REPO_ROOT,
          encoding: 'utf8',
          stdio: ['pipe', 'pipe', 'ignore']
        });
      }
    }

    const changedFiles = diffOutput
      .split(/\r?\n/)
      .map(s => s.trim())
      .filter(Boolean);

    console.log(`[IndexNow] Git detected ${changedFiles.length} changed file(s):`);
    changedFiles.forEach(f => console.log(`  - ${f}`));

    // If sitemap.xml changed, it's safer to submit sitemap URLs
    if (changedFiles.some(f => f.endsWith('sitemap.xml'))) {
      console.log('[IndexNow] sitemap.xml was modified; submitting all sitemap URLs.');
      return getSitemapUrls();
    }

    const urls = [];
    for (const file of changedFiles) {
      const url = filePathToUrl(file);
      if (url) urls.push(url);
    }
    return Array.from(new Set(urls));
  } catch (err) {
    console.warn('[IndexNow] Warning: Could not detect changes via git diff:', err.message);
    return [];
  }
}

// 5. Submit batch of URLs to IndexNow API
function postToIndexNow(key, keyLocation, urls) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      host: HOST,
      key: key,
      keyLocation: keyLocation,
      urlList: urls
    });

    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/IndexNow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload)
      },
      timeout: 15000
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          body: data
        });
      });
    });

    req.on('error', (err) => reject(err));
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('IndexNow request timed out after 15s'));
    });

    req.write(payload);
    req.end();
  });
}

// 6. Main execution
async function main() {
  const args = process.argv.slice(2);
  const isSubmitAll = args.includes('--all') || process.env.SUBMIT_ALL === 'true' || process.env.EVENT_NAME === 'workflow_dispatch';
  const isDryRun = args.includes('--dry-run');

  console.log('====================================================');
  console.log('             IndexNow Submission Engine             ');
  console.log('====================================================');
  console.log(`Host: ${HOST}`);
  console.log(`Base URL: ${BASE_URL}`);

  const apiKey = getApiKey();
  if (!apiKey) {
    console.error('[IndexNow] Error: No IndexNow API key found.');
    console.error('Please configure the INDEXNOW_API_KEY secret in GitHub repository settings.');
    process.exit(1);
  }

  console.log(`API Key: ${mask(apiKey)}`);
  const keyLocation = `${BASE_URL}/${apiKey}.txt`;
  console.log(`Key Location: ${keyLocation}`);

  // Check key file on disk
  const localKeyFile = path.join(REPO_ROOT, `${apiKey}.txt`);
  if (!fs.existsSync(localKeyFile)) {
    console.warn(`[IndexNow] Warning: Local verification file ${apiKey}.txt was not found in root.`);
  } else {
    console.log(`[IndexNow] Verified local key file exists: ${apiKey}.txt`);
  }

  let urlsToSubmit = [];

  if (isSubmitAll) {
    console.log('[IndexNow] Mode: Full submission (all canonical URLs from sitemap.xml)');
    urlsToSubmit = getSitemapUrls();
    // If sitemap empty, discover all html files
    if (urlsToSubmit.length === 0) {
      const files = fs.readdirSync(REPO_ROOT).filter(f => f.endsWith('.html'));
      urlsToSubmit = files.map(filePathToUrl).filter(Boolean);
    }
  } else {
    console.log('[IndexNow] Mode: Incremental (changed files only)');
    urlsToSubmit = getChangedUrls(process.env.BEFORE_SHA, process.env.GITHUB_SHA);
  }

  if (urlsToSubmit.length === 0) {
    console.log('[IndexNow] No HTML page changes detected. Nothing to submit.');
    console.log('====================================================');
    return;
  }

  console.log(`[IndexNow] Preparing to submit ${urlsToSubmit.length} URL(s):`);
  urlsToSubmit.forEach(u => console.log(`  -> ${u}`));

  if (isDryRun) {
    console.log('[IndexNow] Dry-run enabled. Skipping network request.');
    console.log('====================================================');
    return;
  }

  // Split into chunks of 10,000 (IndexNow batch limit)
  const CHUNK_SIZE = 10000;
  for (let i = 0; i < urlsToSubmit.length; i += CHUNK_SIZE) {
    const chunk = urlsToSubmit.slice(i, i + CHUNK_SIZE);
    console.log(`[IndexNow] Submitting batch ${Math.floor(i / CHUNK_SIZE) + 1} (${chunk.length} URLs)...`);

    try {
      const response = await postToIndexNow(apiKey, keyLocation, chunk);
      console.log(`[IndexNow] Response HTTP Status: ${response.statusCode} ${response.statusMessage || ''}`);

      if (response.statusCode === 200) {
        console.log('[IndexNow] SUCCESS (200 OK): URLs submitted and validated successfully.');
      } else if (response.statusCode === 202) {
        console.log('[IndexNow] SUCCESS (202 Accepted): URL submission accepted for processing.');
      } else if (response.statusCode === 400) {
        console.error('[IndexNow] Error 400 Bad Request: Invalid format.', response.body);
        process.exitCode = 1;
      } else if (response.statusCode === 403) {
        console.warn('[IndexNow] Warning 403 Forbidden: Key not valid or verification file not yet accessible at:', keyLocation);
        console.warn('Note: If this is the initial deployment, Cloudflare Pages may need a few minutes to publish the TXT file.');
      } else if (response.statusCode === 422) {
        console.error('[IndexNow] Error 422 Unprocessable Entity: URLs do not match the host.', response.body);
        process.exitCode = 1;
      } else if (response.statusCode === 429) {
        console.warn('[IndexNow] Warning 429: Too Many Requests (Rate limited).');
      } else {
        console.log(`[IndexNow] Server responded with status ${response.statusCode}:`, response.body || '(no body)');
      }
    } catch (err) {
      console.error('[IndexNow] Network Error submitting URLs:', err.message);
      // Don't fail the build on network timeouts to avoid blocking CI
      process.exitCode = 0;
    }
  }

  console.log('====================================================');
}

if (require.main === module) {
  main().catch(err => {
    console.error('[IndexNow] Unexpected error:', err);
    process.exit(1);
  });
}

module.exports = { filePathToUrl, getSitemapUrls, getChangedUrls, postToIndexNow };
