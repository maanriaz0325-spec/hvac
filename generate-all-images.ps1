Add-Type -AssemblyName System.Drawing

$imgDir = "c:\Users\Hp\Downloads\cool-comfort-hvac\images"

# Load background source images if available for authentic photography base
$srcFurnace = Join-Path $imgDir "hero-furnace-repair.jpg"
$srcHeatPump = Join-Path $imgDir "service-heat-pump.jpg"
$srcHeating = Join-Path $imgDir "hero-heating-repair.jpg"
$srcReplacement = Join-Path $imgDir "hero-replacement.jpg"
$srcTech = Join-Path $imgDir "why-us-technician.jpg"
$srcCentral = Join-Path $imgDir "project-install-central.jpg"

function Generate-Photo {
    param (
        [string]$Filename,
        [int]$Width,
        [int]$Height,
        [string]$SourceBase,
        [int]$CropX,
        [int]$CropY,
        [int]$CropW,
        [int]$CropH,
        [string]$Category,
        [string]$Title,
        [string]$Subtitle,
        [string]$Metric,
        [string]$Badge,
        [string]$AccentHex
    )

    $bmp = New-Object System.Drawing.Bitmap($Width, $Height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

    $accentColor = [System.Drawing.ColorTranslator]::FromHtml($AccentHex)

    # 1. Base photographic layer
    if ($SourceBase -and (Test-Path $SourceBase)) {
        try {
            $baseImg = [System.Drawing.Image]::FromFile($SourceBase)
            $srcRect = New-Object System.Drawing.Rectangle($CropX, $CropY, $CropW, $CropH)
            $destRect = New-Object System.Drawing.Rectangle(0, 0, $Width, $Height)
            $g.DrawImage($baseImg, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
            $baseImg.Dispose()
        } catch {
            $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(20, 30, 48))
            $g.FillRectangle($bgBrush, 0, 0, $Width, $Height)
            $bgBrush.Dispose()
        }
    } else {
        $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(20, 30, 48))
        $g.FillRectangle($bgBrush, 0, 0, $Width, $Height)
        $bgBrush.Dispose()
    }

    # 2. Dark tint overlay to enhance text readability while showing real photo
    $tintBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        (New-Object System.Drawing.Point(0, 0)),
        (New-Object System.Drawing.Point(0, $Height)),
        [System.Drawing.Color]::FromArgb(140, 10, 18, 30),
        [System.Drawing.Color]::FromArgb(245, 8, 15, 26)
    )
    $g.FillRectangle($tintBrush, 0, 0, $Width, $Height)
    $tintBrush.Dispose()

    # 3. Technical diagnostic HUD overlay lines
    $hudPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(60, $accentColor.R, $accentColor.G, $accentColor.B), 1)
    $g.DrawLine($hudPen, 24, 24, ($Width - 24), 24)
    $g.DrawLine($hudPen, 24, ($Height - 24), ($Width - 24), ($Height - 24))
    $g.DrawLine($hudPen, 24, 24, 24, ($Height - 24))
    $g.DrawLine($hudPen, ($Width - 24), 24, ($Width - 24), ($Height - 24))

    # Corner brackets
    $cornerPen = New-Object System.Drawing.Pen($accentColor, 2)
    $g.DrawLine($cornerPen, 24, 24, 44, 24)
    $g.DrawLine($cornerPen, 24, 24, 24, 44)
    $g.DrawLine($cornerPen, ($Width - 24), 24, ($Width - 44), 24)
    $g.DrawLine($cornerPen, ($Width - 24), 24, ($Width - 24), 44)
    $g.DrawLine($cornerPen, 24, ($Height - 24), 44, ($Height - 24))
    $g.DrawLine($cornerPen, 24, ($Height - 24), 24, ($Height - 44))
    $g.DrawLine($cornerPen, ($Width - 24), ($Height - 24), ($Width - 44), ($Height - 24))
    $g.DrawLine($cornerPen, ($Width - 24), ($Height - 24), ($Width - 24), ($Height - 44))
    $cornerPen.Dispose()
    $hudPen.Dispose()

    # 4. Top Category pill badge
    $badgeW = [Math]::Max(160, ($Category.Length * 9) + 20)
    $catBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(220, $accentColor.R, $accentColor.G, $accentColor.B))
    $g.FillRectangle($catBrush, 36, 36, $badgeW, 26)
    $catBrush.Dispose()

    $catFont = New-Object System.Drawing.Font("Arial", [float]8.5, [System.Drawing.FontStyle]::Bold)
    $catTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(10, 15, 25))
    $g.DrawString($Category.ToUpper(), $catFont, $catTextBrush, [float]44, [float]42)
    $catFont.Dispose()
    $catTextBrush.Dispose()

    # Right Badge
    if ($Badge) {
        $badgeFont = New-Object System.Drawing.Font("Arial", [float]8.5, [System.Drawing.FontStyle]::Bold)
        $badgeBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(180, 15, 23, 42))
        $badgeBorder = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(120, 255, 255, 255), 1)
        $bW = ($Badge.Length * 8) + 20
        $bX = $Width - 36 - $bW
        $g.FillRectangle($badgeBg, $bX, 36, $bW, 26)
        $g.DrawRectangle($badgeBorder, $bX, 36, $bW, 26)
        $whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
        $g.DrawString($Badge, $badgeFont, $whiteBrush, [float]($bX + 10), [float]42)
        $badgeFont.Dispose()
        $badgeBg.Dispose()
        $badgeBorder.Dispose()
        $whiteBrush.Dispose()
    }

    # 5. Title & Subtitle
    $titleFont = New-Object System.Drawing.Font("Arial", [float]18, [System.Drawing.FontStyle]::Bold)
    $whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $titleRect = New-Object System.Drawing.RectangleF([float]36, [float]($Height - 135), [float]($Width - 72), [float]55)
    $g.DrawString($Title, $titleFont, $whiteBrush, $titleRect)
    $titleFont.Dispose()

    $subFont = New-Object System.Drawing.Font("Arial", [float]10.5, [System.Drawing.FontStyle]::Regular)
    $subBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(210, 225, 240))
    $subRect = New-Object System.Drawing.RectangleF([float]36, [float]($Height - 75), [float]($Width - 210), [float]45)
    $g.DrawString($Subtitle, $subFont, $subBrush, $subRect)
    $subFont.Dispose()
    $subBrush.Dispose()

    # 6. Metric tag on bottom right
    if ($Metric) {
        $mFont = New-Object System.Drawing.Font("Arial", [float]10, [System.Drawing.FontStyle]::Bold)
        $mBrush = New-Object System.Drawing.SolidBrush($accentColor)
        $g.DrawString($Metric, $mFont, $mBrush, [float]($Width - 170), [float]($Height - 60))
        $mFont.Dispose()
        $mBrush.Dispose()
    }

    $whiteBrush.Dispose()
    $g.Dispose()

    # Save high-quality JPEG
    $destFile = Join-Path $imgDir $Filename
    $bmp.Save($destFile, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
    Write-Output "Generated: $Filename"
}

# 1. FURNACE INSTALLATION (Orange Accent: #F97316)
Generate-Photo "hero-furnace-installation.jpg" 1200 675 $srcFurnace 50 40 1000 560 "FURNACE INSTALLATION" "Furnace Installation in Miami, FL" "ACCA Manual J Load Sizing, Precision Sheet Metal & Code Setup" "25+ Yrs Exp" "Miami-Dade Permitted" "#F97316"
Generate-Photo "furnace-install-gas.jpg" 800 533 $srcFurnace 120 80 750 500 "GAS HEATING" "Gas Furnace Installation" "Sediment trap, shutoff valve and direct vent combustion setup" "Gas Code Compliant" "Upfront Pricing" "#F97316"
Generate-Photo "furnace-install-electric.jpg" 800 533 $srcCentral 80 50 720 480 "ELECTRIC HEATING" "Electric Furnace Installation" "Multi-stage nickel-chromium coils and dedicated 240V circuits" "Zero Emissions" "240V Dedicated" "#F97316"
Generate-Photo "furnace-install-ductwork.jpg" 800 533 $srcHeating 100 60 740 490 "DUCT INTEGRATION" "Custom Ductwork & Transitions" "Static pressure balancing, mastic sealing & vibration isolation" "Manual D Sizing" "Full CFM Airflow" "#F97316"
Generate-Photo "furnace-install-sizing.jpg" 800 533 $srcTech 60 40 760 500 "ENGINEERING" "Manual J Load Sizing" "Room-by-room heat loss calculations to prevent short-cycling" "Exact BTU Match" "ACCA Standard" "#F97316"
Generate-Photo "furnace-install-venting.jpg" 800 533 $srcFurnace 200 120 700 460 "SAFETY VENTING" "Direct Vent & Flue Systems" "Cat IV PVC exhaust piping sloped for proper condensate runoff" "Draft Verified" "CO Safety Tested" "#F97316"
Generate-Photo "furnace-install-condensate.jpg" 800 533 $srcCentral 140 90 710 470 "DRAINAGE" "Condensate Drain Management" "Neutralizer cartridges and float safety shutoffs for 90%+ AFUE" "Acid Safe" "Clean Drainage" "#F97316"
Generate-Photo "project-furnace-install-miami.jpg" 800 533 $srcFurnace 80 50 780 520 "PROJECT SHOWCASE" "New Gas Furnace in Miami" "High-efficiency 96% AFUE two-stage heating installation" "Miami, FL" "Completed 2026" "#F97316"
Generate-Photo "project-furnace-install-pinecrest.jpg" 800 533 $srcCentral 90 60 750 500 "PROJECT SHOWCASE" "Pinecrest Electric Furnace" "Quiet multi-speed blower and complete supply plenum transition" "Pinecrest, FL" "Completed 2026" "#F97316"
Generate-Photo "project-furnace-install-coralgables.jpg" 800 533 $srcHeating 110 70 760 510 "PROJECT SHOWCASE" "Coral Gables Basement Setup" "High-clearance mechanical closet install with smart zoning" "Coral Gables" "Completed 2026" "#F97316"

# 2. FURNACE REPLACEMENT (Emerald Accent: #10B981)
Generate-Photo "hero-furnace-replacement.jpg" 1200 675 $srcReplacement 60 40 980 550 "FURNACE REPLACEMENT" "Furnace Replacement in Miami, FL" "Evaluating aging systems, matched AC changeouts & zone retrofit" "25+ Yrs Exp" "Certified Changeout" "#10B981"
Generate-Photo "replace-furnace-age.jpg" 800 533 $srcFurnace 240 140 680 450 "OBSOLESCENCE" "Furnaces Over 20-30 Years Old" "Metal fatigue, obsolete parts and failing pilot assemblies" "High Heat Loss" "Parts Phased Out" "#10B981"
Generate-Photo "replace-furnace-repairs.jpg" 800 533 $srcHeating 160 100 700 460 "COST ANALYSIS" "Repeated Repair Breakdowns" "Comparing cumulative component repair bills against new system" "Diminishing ROI" "Frequent Failures" "#10B981"
Generate-Photo "replace-furnace-uneven.jpg" 800 533 $srcCentral 110 70 740 490 "COMFORT ISSUES" "Uneven Room Temperatures" "Blower degradation and inadequate supply duct distribution" "Hot/Cold Spots" "Low CFM Output" "#10B981"
Generate-Photo "replace-furnace-cycling.jpg" 800 533 $srcFurnace 180 110 720 480 "SHORT CYCLING" "Frequent Cycling & Shutoffs" "Overheating limits, dirty sensors and oversized unit cycles" "Excess Wear" "High Energy Bills" "#10B981"
Generate-Photo "replace-furnace-exchanger.jpg" 800 533 $srcHeating 220 130 690 460 "COMBUSTION HAZARD" "Compromised Heat Exchanger" "Micro-fissures leaking carbon monoxide into living areas" "Immediate Hazard" "CO Leak Risk" "#10B981"
Generate-Photo "replace-furnace-matched-ac.jpg" 800 533 $srcReplacement 100 60 760 500 "MATCHED SYSTEM" "Combined AC & Furnace Changeout" "Pairing high-SEER2 cooling with matched AFUE heating blower" "AHRI Matched" "Optimized Energy" "#10B981"
Generate-Photo "project-furnace-replace-brickell.jpg" 800 533 $srcFurnace 90 60 750 500 "PROJECT SHOWCASE" "Brickell Multi-Zone Upgrade" "Replaced 24-year-old furnace with variable-speed smart unit" "Brickell, FL" "Completed 2026" "#10B981"
Generate-Photo "project-furnace-replace-aventura.jpg" 800 533 $srcReplacement 80 50 780 520 "PROJECT SHOWCASE" "Aventura Dual-System Changeout" "Complete simultaneous replacement of AC condenser and furnace" "Aventura, FL" "Completed 2026" "#10B981"
Generate-Photo "project-furnace-replace-doral.jpg" 800 533 $srcCentral 130 80 730 480 "PROJECT SHOWCASE" "Doral Residence Retrofit" "Removed noisy legacy heater for ultra-efficient ECM air handler" "Doral, FL" "Completed 2026" "#10B981"

# 3. HEAT PUMP REPAIR (Cyan Accent: #0EA5E9)
Generate-Photo "hero-heat-pump-repair.jpg" 1200 675 $srcHeatPump 40 30 1020 570 "HEAT PUMP REPAIR" "Heat Pump Repair in Miami, FL" "Rapid diagnostics on reversing valves, defrost boards & cooling" "24/7 Dispatch" "Licensed Techs" "#0EA5E9"
Generate-Photo "problem-heatpump-not-cooling.jpg" 800 533 $srcHeatPump 100 60 750 500 "COOLING FAILURE" "Heat Pump Not Cooling" "Testing compressor contactor, dual capacitor and coil airflow" "Lukewarm Air" "Diagnostic First" "#0EA5E9"
Generate-Photo "problem-heatpump-not-heating.jpg" 800 533 $srcHeatPump 160 90 720 480 "HEATING FAILURE" "Blowing Cool Air in Heat Mode" "Checking reversing valve solenoid signal and auxiliary heat strips" "Mode Conflict" "Signal Verified" "#0EA5E9"
Generate-Photo "problem-heatpump-reversing-valve.jpg" 800 533 $srcHeatPump 220 120 680 450 "VALVE DIAGNOSTIC" "Stuck Reversing Valve" "Diagnosing 4-way valve slide mechanism and low voltage coil" "Stuck in Mode" "Internal Bypass" "#0EA5E9"
Generate-Photo "problem-heatpump-frozen-coil.jpg" 800 533 $srcHeatPump 120 70 740 490 "DEFROST SYSTEM" "Outdoor Unit Covered in Ice" "Defrost control board logic, thermistor sensor & fan cutoff test" "Heavy Frosting" "Defrost Restored" "#0EA5E9"
Generate-Photo "problem-heatpump-running-constantly.jpg" 800 533 $srcCentral 140 80 720 480 "PERFORMANCE" "Running Without Reaching Temp" "Refrigerant undercharge, leaking subcool loop or duct return leak" "High Run Time" "Load Inspection" "#0EA5E9"
Generate-Photo "problem-heatpump-short-cycling.jpg" 800 533 $srcHeatPump 180 100 700 460 "CYCLE TRIPS" "Heat Pump Short Cycling" "High pressure cutout trips caused by dirty coil or bad sensor" "Rapid Stoppage" "Pressure Safety" "#0EA5E9"
Generate-Photo "problem-heatpump-humming-fan.jpg" 800 533 $srcHeatPump 200 110 690 460 "MOTOR FAULTS" "Humming Unit with Seized Fan" "Motor winding resistance test, run capacitor and bearing repair" "No Fan Spin" "Motor Protection" "#0EA5E9"
Generate-Photo "problem-heatpump-breaker-trip.jpg" 800 533 $srcTech 120 70 740 490 "ELECTRICAL FAULT" "Tripping Circuit Breaker" "Compressor grounded winding and auxiliary heat short circuit test" "High Amp Draw" "Electrical Safe" "#0EA5E9"
Generate-Photo "project-heatpump-miami.jpg" 800 533 $srcHeatPump 80 50 780 520 "PROJECT SHOWCASE" "Reversing Valve Repair in Miami" "Precision brazed valve replacement with nitrogen sweep" "Miami, FL" "Completed 2026" "#0EA5E9"
Generate-Photo "project-heatpump-coconutgrove.jpg" 800 533 $srcHeatPump 130 80 740 490 "PROJECT SHOWCASE" "Coconut Grove Defrost Board" "Sensor recalibration and solid-state defrost controller install" "Coconut Grove" "Completed 2026" "#0EA5E9"
Generate-Photo "project-heatpump-kendall.jpg" 800 533 $srcHeatPump 90 60 760 500 "PROJECT SHOWCASE" "Kendall Dual Stage Heat Pump" "Capacitor replacement and refrigerant optimization on 4-ton unit" "Kendall, FL" "Completed 2026" "#0EA5E9"

# 4. WATER HEATER REPAIR (Amber Accent: #F59E0B)
Generate-Photo "hero-water-heater-repair.jpg" 1200 675 $srcCentral 50 30 1000 560 "WATER HEATER REPAIR" "Hot Water Heater Repair in Miami" "Element replacement, gas pilot restoration & tankless descaling" "Same-Day Visits" "Licensed Plumbers" "#F59E0B"
Generate-Photo "problem-waterheater-no-hot-water.jpg" 800 533 $srcCentral 110 60 750 500 "NO HOT WATER" "Complete Loss of Hot Water" "Testing upper heating element continuity and high limit reset switch" "Zero Heat" "Electrical Continuity" "#F59E0B"
Generate-Photo "problem-waterheater-lukewarm.jpg" 800 533 $srcCentral 160 90 720 480 "TEMPERATURE ISSUE" "Only Producing Lukewarm Water" "Replacing damaged dip tube to prevent cold water dilution at top" "Tepid Water" "Dip Tube Fixed" "#F59E0B"
Generate-Photo "problem-waterheater-slow-recovery.jpg" 800 533 $srcCentral 190 110 700 460 "RECOVERY DELAY" "Taking Too Long to Heat" "Lower element failure and heavy calcium scale buildup on tank floor" "Slow Recovery" "Element Restored" "#F59E0B"
Generate-Photo "problem-waterheater-tank-leak.jpg" 800 533 $srcCentral 130 70 740 490 "LEAK DETECTION" "Water Heater Leaking" "Tracing water origin: T&P valve, threaded fittings vs tank corrosion" "Active Leak" "Safe Valve Check" "#F59E0B"
Generate-Photo "problem-waterheater-popping-noise.jpg" 800 533 $srcFurnace 170 90 710 470 "SEDIMENT NOISE" "Popping or Rumbling Noises" "Cavitation pockets trapped under dense mineral sediment layer" "Boiling Pops" "Clean Flush" "#F59E0B"
Generate-Photo "problem-waterheater-rusty-water.jpg" 800 533 $srcFurnace 230 130 670 440 "WATER QUALITY" "Rusty or Discolored Hot Water" "Deteriorated magnesium anode rod inspection & tank wall corrosion" "Discolored Flow" "Anode Checked" "#F59E0B"
Generate-Photo "problem-waterheater-tripped-breaker.jpg" 800 533 $srcTech 100 60 760 500 "ELECTRICAL FAULT" "Water Heater Tripping Breaker" "Ground fault in ruptured water heating element or shorted wire" "Breaker Reset Fail" "Amp Tested" "#F59E0B"
Generate-Photo "problem-waterheater-pilot-out.jpg" 800 533 $srcFurnace 190 110 700 460 "GAS IGNITION" "Pilot Light Repeatedly Out" "Thermocouple millivolt output, gas control valve & draft safety" "Flame Loss" "Millivolt Tested" "#F59E0B"
Generate-Photo "problem-waterheater-tankless-error.jpg" 800 533 $srcCentral 140 80 730 480 "TANKLESS SYSTEMS" "Tankless Unit Error Code" "Flow sensor cleaning, gas pressure regulation & vinegar descaling" "Digital Codes" "Flow Sensor Sync" "#F59E0B"
Generate-Photo "project-waterheater-miamibeach.jpg" 800 533 $srcCentral 80 50 780 520 "PROJECT SHOWCASE" "Miami Beach Condo Element Swap" "Dual 4500W copper element replacement and thermostat tuning" "Miami Beach" "Completed 2026" "#F59E0B"
Generate-Photo "project-waterheater-coralgables.jpg" 800 533 $srcHeating 120 70 750 500 "PROJECT SHOWCASE" "Coral Gables T&P Valve Fix" "New Watts temperature and pressure relief valve & brass drain" "Coral Gables" "Completed 2026" "#F59E0B"
Generate-Photo "project-waterheater-kendall.jpg" 800 533 $srcCentral 100 60 760 500 "PROJECT SHOWCASE" "Kendall Tankless Descaling" "Recirculation pump flush clearing heavy calcium from heat exchanger" "Kendall, FL" "Completed 2026" "#F59E0B"

Write-Output "SUCCESS: All 45 distinct HVAC photographic assets generated!"
