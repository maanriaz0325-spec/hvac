Add-Type -AssemblyName System.Drawing

$imgDir = "c:\Users\Hp\Downloads\cool-comfort-hvac\images"

# High-Res Source Originals
$srcHeatPump = Join-Path $imgDir "service-heat-pump.jpg"
$srcCarrierHero = Join-Path $imgDir "hero-replacement.jpg"
$srcHeatingSarah = Join-Path $imgDir "hero-heating-repair.jpg"
$srcFurnaceClose = Join-Path $imgDir "hero-furnace-repair.jpg"
$srcCentralInstall = Join-Path $imgDir "project-install-central.jpg"
$srcMiniSplitLiving = Join-Path $imgDir "project-install-minisplit.jpg"
$srcCommercialRooftop = Join-Path $imgDir "project-install-commercial.jpg"
$srcCapacitorTech = Join-Path $imgDir "project-repair-capacitor.jpg"
$srcDrainFlush = Join-Path $imgDir "project-repair-drain.jpg"
$srcTestoGauges = Join-Path $imgDir "project-repair-leak.jpg"
$srcCarrierPad = Join-Path $imgDir "project-replacement-1.jpg"
$srcTestoScreen = Join-Path $imgDir "project-replacement-2.jpg"
$srcMechRoom = Join-Path $imgDir "project-replacement-3.jpg"
$srcHeatingCapTech = Join-Path $imgDir "project-heating-1.jpg"
$srcWhyUsTech = Join-Path $imgDir "why-us-technician.jpg"
$srcResHome = Join-Path $imgDir "residential-home.jpg"
$srcCommBuilding = Join-Path $imgDir "commercial-building.jpg"
$srcSkyline = Join-Path $imgDir "miami-skyline.jpg"
$srcAcRepair = Join-Path $imgDir "service-ac-repair.jpg"

function Generate-Clean-Photo {
    param (
        [string]$Filename,
        [int]$Width,
        [int]$Height,
        [string]$SourcePath,
        [int]$FocusX,
        [int]$FocusY,
        [int]$DesiredW,
        [int]$DesiredH
    )

    $targetPath = Join-Path $imgDir $Filename
    $bmp = New-Object System.Drawing.Bitmap($Width, $Height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    if ($SourcePath -and (Test-Path $SourcePath)) {
        try {
            $srcImg = [System.Drawing.Image]::FromFile($SourcePath)
            
            $targetRatio = [double]$Width / [double]$Height
            $cropRatio = [double]$DesiredW / [double]$DesiredH

            $finalW = $DesiredW
            $finalH = $DesiredH

            if ($cropRatio -gt $targetRatio) {
                $finalW = [int]($DesiredH * $targetRatio)
            } else {
                $finalH = [int]($DesiredW / $targetRatio)
            }

            $actualX = [Math]::Max(0, [Math]::Min($FocusX, $srcImg.Width - $finalW))
            $actualY = [Math]::Max(0, [Math]::Min($FocusY, $srcImg.Height - $finalH))
            $finalW = [Math]::Min($finalW, $srcImg.Width - $actualX)
            $finalH = [Math]::Min($finalH, $srcImg.Height - $actualY)

            $srcRect = New-Object System.Drawing.Rectangle($actualX, $actualY, $finalW, $finalH)
            $destRect = New-Object System.Drawing.Rectangle(0, 0, $Width, $Height)

            $g.DrawImage($srcImg, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
            $srcImg.Dispose()
        } catch {
            $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(6, 26, 48))
            $g.FillRectangle($brush, 0, 0, $Width, $Height)
            $brush.Dispose()
        }
    } else {
        $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(6, 26, 48))
        $g.FillRectangle($brush, 0, 0, $Width, $Height)
        $brush.Dispose()
    }

    $g.Dispose()

    # Save with 95% JPEG quality
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)

    $bmp.Save($targetPath, $codec, $encoderParams)
    $bmp.Dispose()
    Write-Host "Generated clean photo: $Filename ($Width x $Height)"
}

Write-Host "--- Generating Aspect-Perfect Separate Photos for ALL Services ---"

# ==============================================================================
# 0. FURNACE INSTALLATION IMAGES (Clean Real Photos)
# ==============================================================================
Generate-Clean-Photo "hero-furnace-installation.jpg" 800 520 $srcCarrierHero 350 80 1350 880
Generate-Clean-Photo "furnace-install-gas.jpg" 600 380 $srcHeatingSarah 700 200 1100 700
Generate-Clean-Photo "furnace-install-electric.jpg" 600 380 $srcMechRoom 200 80 1450 920
Generate-Clean-Photo "furnace-install-sizing.jpg" 600 380 $srcWhyUsTech 300 80 1300 820
Generate-Clean-Photo "furnace-install-ductwork.jpg" 600 380 $srcMechRoom 400 150 1200 760
Generate-Clean-Photo "furnace-install-venting.jpg" 600 380 $srcFurnaceClose 150 80 1450 920
Generate-Clean-Photo "project-furnace-install-miami.jpg" 600 380 $srcMechRoom 250 100 1350 850
Generate-Clean-Photo "project-furnace-install-pinecrest.jpg" 600 380 $srcCarrierPad 200 50 1450 920
Generate-Clean-Photo "project-furnace-install-coralgables.jpg" 600 380 $srcDrainFlush 200 80 1400 880

# ==============================================================================
# 1. FURNACE REPLACEMENT IMAGES
# ==============================================================================
Generate-Clean-Photo "hero-furnace-replacement.jpg" 800 520 $srcMechRoom 150 50 1500 975
Generate-Clean-Photo "replace-furnace-age.jpg" 600 380 $srcFurnaceClose 200 100 1300 820
Generate-Clean-Photo "replace-furnace-repairs.jpg" 600 380 $srcWhyUsTech 350 50 1200 760
Generate-Clean-Photo "replace-furnace-uneven.jpg" 600 380 $srcResHome 200 100 1400 880
Generate-Clean-Photo "replace-furnace-cycling.jpg" 600 380 $srcAcRepair 150 100 1350 850
Generate-Clean-Photo "replace-furnace-exchanger.jpg" 600 380 $srcHeatingSarah 900 250 900 570
Generate-Clean-Photo "replace-furnace-matched-ac.jpg" 600 380 $srcCarrierHero 300 100 1300 820
Generate-Clean-Photo "project-furnace-replace-brickell.jpg" 600 380 $srcMechRoom 300 80 1350 850
Generate-Clean-Photo "project-furnace-replace-aventura.jpg" 600 380 $srcCommBuilding 250 100 1400 880
Generate-Clean-Photo "project-furnace-replace-doral.jpg" 600 380 $srcCarrierPad 250 80 1400 880

# ==============================================================================
# 2. HEAT PUMP REPAIR IMAGES
# ==============================================================================
Generate-Clean-Photo "hero-heat-pump-repair.jpg" 800 520 $srcHeatPump 350 100 1450 940
Generate-Clean-Photo "problem-heatpump-not-cooling.jpg" 600 380 $srcTestoScreen 200 30 1450 920
Generate-Clean-Photo "problem-heatpump-not-heating.jpg" 600 380 $srcHeatingSarah 300 80 1300 820
Generate-Clean-Photo "problem-heatpump-reversing-valve.jpg" 600 380 $srcTestoGauges 250 50 1400 880
Generate-Clean-Photo "problem-heatpump-frozen-coil.jpg" 600 380 $srcHeatPump 550 200 950 600
Generate-Clean-Photo "problem-heatpump-running-constantly.jpg" 600 380 $srcMiniSplitLiving 100 80 1600 1010
Generate-Clean-Photo "problem-heatpump-short-cycling.jpg" 600 380 $srcCapacitorTech 250 100 1400 880
Generate-Clean-Photo "problem-heatpump-humming-fan.jpg" 600 380 $srcCentralInstall 250 100 1400 880
Generate-Clean-Photo "problem-heatpump-breaker-trip.jpg" 600 380 $srcHeatingCapTech 200 80 1450 920
Generate-Clean-Photo "project-heatpump-miami.jpg" 600 380 $srcHeatPump 450 150 1350 850
Generate-Clean-Photo "project-heatpump-coconutgrove.jpg" 600 380 $srcTestoGauges 300 80 1300 820
Generate-Clean-Photo "project-heatpump-kendall.jpg" 600 380 $srcCentralInstall 200 60 1500 950

# ==============================================================================
# 3. WATER HEATER REPAIR IMAGES
# ==============================================================================
Generate-Clean-Photo "hero-water-heater-repair.jpg" 800 520 $srcDrainFlush 500 50 1300 845
Generate-Clean-Photo "problem-waterheater-no-hot-water.jpg" 600 380 $srcHeatingSarah 250 80 1250 790
Generate-Clean-Photo "problem-waterheater-lukewarm.jpg" 600 380 $srcDrainFlush 150 80 1450 920
Generate-Clean-Photo "problem-waterheater-slow-recovery.jpg" 600 380 $srcDrainFlush 550 200 1150 730
Generate-Clean-Photo "problem-waterheater-tank-leak.jpg" 600 380 $srcDrainFlush 350 300 1250 790
Generate-Clean-Photo "problem-waterheater-popping-noise.jpg" 600 380 $srcHeatingSarah 700 100 1000 630
Generate-Clean-Photo "problem-waterheater-rusty-water.jpg" 600 380 $srcTestoGauges 400 150 1200 760
Generate-Clean-Photo "problem-waterheater-tripped-breaker.jpg" 600 380 $srcCapacitorTech 280 120 1300 820
Generate-Clean-Photo "problem-waterheater-pilot-out.jpg" 600 380 $srcHeatingSarah 800 350 950 600
Generate-Clean-Photo "problem-waterheater-tankless-error.jpg" 600 380 $srcMechRoom 350 120 1200 760
Generate-Clean-Photo "project-waterheater-miamibeach.jpg" 600 380 $srcMechRoom 250 80 1400 880
Generate-Clean-Photo "project-waterheater-coralgables.jpg" 600 380 $srcDrainFlush 200 50 1450 920
Generate-Clean-Photo "project-waterheater-kendall.jpg" 600 380 $srcTestoGauges 200 30 1400 880

Write-Host "=== All Images Generated Clean & Perfect! ==="
