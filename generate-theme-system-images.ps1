Add-Type -AssemblyName System.Drawing

$imgDir = "c:\Users\Hp\Downloads\cool-comfort-hvac\images"

$srcFurnace = Join-Path $imgDir "hero-furnace-repair.jpg"
$srcHeatPump = Join-Path $imgDir "hero-heat-pump-repair.jpg"
$srcHeating = Join-Path $imgDir "hero-heating-repair.jpg"
$srcReplacement = Join-Path $imgDir "hero-replacement.jpg"
$srcTech = Join-Path $imgDir "why-us-technician.jpg"
$srcCentral = Join-Path $imgDir "project-install-central.jpg"
$srcBuilding = Join-Path $imgDir "commercial-building.jpg"
$srcSkyline = Join-Path $imgDir "miami-skyline.jpg"

function Generate-Theme-Photo {
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
        [string]$AccentHex = "#0869C9"
    )

    $targetPath = Join-Path $imgDir $Filename
    $bmp = New-Object System.Drawing.Bitmap($Width, $Height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

    $accentColor = [System.Drawing.ColorTranslator]::FromHtml($AccentHex)
    $brandNavy = [System.Drawing.ColorTranslator]::FromHtml("#061A30")
    $brandOrange = [System.Drawing.ColorTranslator]::FromHtml("#FF5A1F")

    # 1. Base photographic layer
    $drawnBase = $false
    if ($SourceBase -and (Test-Path $SourceBase)) {
        try {
            $baseImg = [System.Drawing.Image]::FromFile($SourceBase)
            $srcW = [Math]::Min($baseImg.Width - $CropX, $CropW)
            $srcH = [Math]::Min($baseImg.Height - $CropY, $CropH)
            if ($srcW -gt 50 -and $srcH -gt 50) {
                $srcRect = New-Object System.Drawing.Rectangle($CropX, $CropY, $srcW, $srcH)
                $destRect = New-Object System.Drawing.Rectangle(0, 0, $Width, $Height)
                $g.DrawImage($baseImg, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
                $drawnBase = $true
            }
            $baseImg.Dispose()
        } catch { }
    }

    if (-not $drawnBase) {
        $bgBrush = New-Object System.Drawing.SolidBrush($brandNavy)
        $g.FillRectangle($bgBrush, 0, 0, $Width, $Height)
        $bgBrush.Dispose()
    }

    # 2. Brand Navy Tint Overlay (preserving photo while strictly enforcing site brand theme)
    $tintBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        (New-Object System.Drawing.Point(0, 0)),
        (New-Object System.Drawing.Point(0, $Height)),
        [System.Drawing.Color]::FromArgb(120, 6, 26, 48),
        [System.Drawing.Color]::FromArgb(235, 6, 26, 48)
    )
    $g.FillRectangle($tintBrush, 0, 0, $Width, $Height)
    $tintBrush.Dispose()

    # 3. Subtle Brand Accent Line (Theme Blue #0869C9)
    $linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(70, 8, 105, 201), 1)
    $g.DrawLine($linePen, 20, 20, ($Width - 20), 20)
    $g.DrawLine($linePen, 20, ($Height - 20), ($Width - 20), ($Height - 20))
    $g.DrawLine($linePen, 20, 20, 20, ($Height - 20))
    $g.DrawLine($linePen, ($Width - 20), 20, ($Width - 20), ($Height - 20))
    $linePen.Dispose()

    # Corner brackets (Theme Blue)
    $cornerPen = New-Object System.Drawing.Pen($accentColor, 2)
    $g.DrawLine($cornerPen, 20, 20, 36, 20)
    $g.DrawLine($cornerPen, 20, 20, 20, 36)
    $g.DrawLine($cornerPen, ($Width - 20), 20, ($Width - 36), 20)
    $g.DrawLine($cornerPen, ($Width - 20), 20, ($Width - 20), 36)
    $g.DrawLine($cornerPen, 20, ($Height - 20), 36, ($Height - 20))
    $g.DrawLine($cornerPen, 20, ($Height - 20), 20, ($Height - 36))
    $g.DrawLine($cornerPen, ($Width - 20), ($Height - 20), ($Width - 36), ($Height - 20))
    $g.DrawLine($cornerPen, ($Width - 20), ($Height - 20), ($Width - 20), ($Height - 36))
    $cornerPen.Dispose()

    # 4. Top Category Badge (Theme Orange or Theme Blue)
    $badgeW = [Math]::Max(140, ($Category.Length * 9) + 24)
    $catBrush = New-Object System.Drawing.SolidBrush($accentColor)
    $g.FillRectangle($catBrush, 30, 30, $badgeW, 26)
    $catBrush.Dispose()

    $catFont = New-Object System.Drawing.Font("Arial", [float]8.5, [System.Drawing.FontStyle]::Bold)
    $catTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $g.DrawString($Category.ToUpper(), $catFont, $catTextBrush, [float]38, [float]36)
    $catFont.Dispose()
    $catTextBrush.Dispose()

    # Right Badge (if present)
    if ($Badge) {
        $rBadgeW = [Math]::Max(90, ($Badge.Length * 8) + 16)
        $rBadgeX = $Width - 30 - $rBadgeW
        $rBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(210, 255, 90, 31))
        $g.FillRectangle($rBrush, $rBadgeX, 30, $rBadgeW, 24)
        $rBrush.Dispose()

        $rFont = New-Object System.Drawing.Font("Arial", [float]7.5, [System.Drawing.FontStyle]::Bold)
        $rTextBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
        $g.DrawString($Badge.ToUpper(), $rFont, $rTextBrush, [float]($rBadgeX + 8), [float]35)
        $rFont.Dispose()
        $rTextBrush.Dispose()
    }

    # 5. Title & Subtitle in lower quadrant
    $titleY = $Height - 95
    $titleFont = New-Object System.Drawing.Font("Arial", [float]13.5, [System.Drawing.FontStyle]::Bold)
    $titleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $titleRect = New-Object System.Drawing.RectangleF(30, $titleY, ($Width - 60), 38)
    $g.DrawString($Title, $titleFont, $titleBrush, $titleRect)
    $titleFont.Dispose()
    $titleBrush.Dispose()

    $subFont = New-Object System.Drawing.Font("Arial", [float]9.0, [System.Drawing.FontStyle]::Regular)
    $subBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(215, 225, 238))
    $subRect = New-Object System.Drawing.RectangleF(30, ($titleY + 36), ($Width - 60), 24)
    $g.DrawString($Subtitle, $subFont, $subBrush, $subRect)
    $subFont.Dispose()
    $subBrush.Dispose()

    # 6. Technical Metric / Spec stamp (bottom right)
    if ($Metric) {
        $metFont = New-Object System.Drawing.Font("Arial", [float]8.0, [System.Drawing.FontStyle]::Bold)
        $metBrush = New-Object System.Drawing.SolidBrush($brandOrange)
        $g.DrawString($Metric, $metFont, $metBrush, [float]30, [float]($Height - 28))
        $metFont.Dispose()
        $metBrush.Dispose()
    }

    $g.Dispose()
    $bmp.Save($targetPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
    Write-Host "Created: $Filename"
}

# ==============================================================================
# A. FURNACE REPLACEMENT IMAGES (Theme Brand Colors Only: #0869C9, #FF5A1F)
# ==============================================================================
Generate-Theme-Photo "hero-furnace-replacement.jpg" 800 520 $srcReplacement 40 30 700 480 `
    "MIAMI HEATING SERVICE" "Furnace Replacement & System Upgrade" "Licensed Miami-Dade & Broward Changeout Contractors" "EFFICIENCY: UP TO 98% AFUE" "FL LICENSED" "#0869C9"

Generate-Theme-Photo "replace-furnace-age.jpg" 600 380 $srcReplacement 60 40 500 320 `
    "LIFESPAN EVALUATION" "Furnace Operating Beyond Useful Life" "15-20+ Year Old Equipment Assessment & Safety" "SERVICE LIFE: EXCEEDED" "SIGN 01" "#0869C9"

Generate-Theme-Photo "replace-furnace-repairs.jpg" 600 380 $srcTech 80 50 480 320 `
    "COST ANALYSIS" "Frequent & Expensive Heating Repairs" "Comparing Repair Frequency Against Modern Efficiency" "50% RULE EVALUATION" "SIGN 02" "#0869C9"

Generate-Theme-Photo "replace-furnace-uneven.jpg" 600 380 $srcHeating 100 60 520 340 `
    "AIRFLOW DISTRIBUTION" "Uneven Heating Between Living Zones" "Blower Motor & Duct Static Pressure Imbalance" "ROOM DELTA: >6°F" "SIGN 03" "#0869C9"

Generate-Theme-Photo "replace-furnace-cycling.jpg" 600 380 $srcFurnace 50 40 500 330 `
    "CYCLE FREQUENCY" "Frequent Short Cycling & Heat Loss" "High-Limit Switch & Flame Sensor Trigger Diagnostics" "CYCLE TIME: <4 MINS" "SIGN 04" "#0869C9"

Generate-Theme-Photo "replace-furnace-exchanger.jpg" 600 380 $srcFurnace 120 70 480 320 `
    "COMBUSTION SAFETY" "Heat Exchanger Integrity & Crack Check" "Combustion Chamber Assessment & CO Risk Prevention" "SAFETY STATUS: CRITICAL" "SIGN 05" "#FF5A1F"

Generate-Theme-Photo "replace-furnace-matched-ac.jpg" 600 380 $srcCentral 70 50 510 330 `
    "SYSTEM MATCHING" "Matched AC & Furnace Air Handler Setup" "Synchronized Evaporator Coil & Blower Speed Match" "SEER2 COMPLIANT" "SIGN 06" "#0869C9"

# NEW PROJECTS FOR FURNACE REPLACEMENT
Generate-Theme-Photo "project-furnace-replace-brickell.jpg" 600 380 $srcSkyline 40 30 600 360 `
    "BRICKELL CONDO PROJECT" "High-Rise Matched AC & Heating Changeout" "Engineered horizontal air handler swap with zero disruption" "PERMIT #MI-2026-784" "COMPLETED" "#0869C9"

Generate-Theme-Photo "project-furnace-replace-aventura.jpg" 600 380 $srcBuilding 60 40 580 360 `
    "AVENTURA ESTATE PROJECT" "Variable-Speed Dual-Stage Furnace Retrofit" "Ultra-quiet ECM variable blower with 97% AFUE high efficiency" "ENERGY SAVINGS: 38%" "COMPLETED" "#0869C9"

Generate-Theme-Photo "project-furnace-replace-doral.jpg" 600 380 $srcCentral 80 50 560 350 `
    "DORAL RESIDENTIAL PROJECT" "Split-System Heat Pump & Electric Auxiliary" "Complete mechanical transition from failing outdated furnace" "INSPECTION PASSED" "COMPLETED" "#0869C9"


# ==============================================================================
# B. HEAT PUMP REPAIR IMAGES (Theme Brand Colors Only: #0869C9, #FF5A1F)
# ==============================================================================
Generate-Theme-Photo "hero-heat-pump-repair.jpg" 800 520 $srcHeatPump 30 20 720 480 `
    "DUAL-MODE HVAC" "Heat Pump Diagnostics & Precision Repair" "Reversing Valves, Defrost Controls, Inverters & Coils" "DUAL COOL/HEAT" "SAME-DAY" "#0869C9"

Generate-Theme-Photo "problem-heatpump-not-cooling.jpg" 600 380 $srcCentral 50 30 520 340 `
    "SUMMER MODE" "Heat Pump Blowing Warm Air in Cooling" "Refrigerant Charge, Compressor & Metering Valve Check" "DELTA-T: INSUFFICIENT" "FAULT 01" "#0869C9"

Generate-Theme-Photo "problem-heatpump-not-heating.jpg" 600 380 $srcHeating 70 40 500 330 `
    "WINTER MODE" "Heat Pump Blowing Cool Air in Heating" "Auxiliary Heat Strips & Defrost Cycle Verification" "TEMP RISE: FAILED" "FAULT 02" "#0869C9"

Generate-Theme-Photo "problem-heatpump-reversing-valve.jpg" 600 380 $srcHeatPump 90 60 500 330 `
    "VALVE STUCK" "Reversing Valve Stuck in Single Mode" "Solenoid Coil Voltage & 4-Way Valve Slider Diagnostics" "SOLENOID: 24VAC CHECK" "FAULT 03" "#0869C9"

Generate-Theme-Photo "problem-heatpump-frozen-coil.jpg" 600 380 $srcReplacement 60 50 510 330 `
    "COIL ICING" "Outdoor or Indoor Heat Pump Coil Freezing" "Defrost Sensor, Low Airflow & Leak Detection" "ICING DETECTED" "FAULT 04" "#FF5A1F"

Generate-Theme-Photo "problem-heatpump-running-constantly.jpg" 600 380 $srcTech 100 50 500 330 `
    "DUTY CYCLE" "Heat Pump Running Constantly Without Rest" "Thermostat Communication & Heat Gain/Loss Matching" "RUN TIME: CONTINUOUS" "FAULT 05" "#0869C9"

Generate-Theme-Photo "problem-heatpump-short-cycling.jpg" 600 380 $srcFurnace 80 40 500 330 `
    "RAPID CYCLING" "Heat Pump Starts and Immediately Shuts Off" "High/Low Pressure Switches & Run Capacitor Testing" "CYCLE LIMIT: EXCEEDED" "FAULT 06" "#0869C9"

Generate-Theme-Photo "problem-heatpump-humming-fan.jpg" 600 380 $srcHeatPump 120 70 480 320 `
    "MECHANICAL NOISE" "Unusual Buzzing, Grinding or Fan Humming" "Outdoor Condenser Fan Motor & Contactor Chatter" "DECIBEL TEST: HIGH" "FAULT 07" "#0869C9"

Generate-Theme-Photo "problem-heatpump-breaker-trip.jpg" 600 380 $srcTech 60 40 510 330 `
    "ELECTRICAL SAFETY" "Heat Pump Repeatedly Tripping Breaker" "Locked Rotor Amps (LRA) & Earth Ground Short Checks" "AMP DRAW: OVER CURRENT" "FAULT 08" "#FF5A1F"

# NEW PROJECTS FOR HEAT PUMP REPAIR
Generate-Theme-Photo "project-heatpump-miami.jpg" 600 380 $srcSkyline 60 40 580 350 `
    "COCONUT GROVE PROJECT" "Inverter Heat Pump Reversing Valve Swap" "Replaced faulty 4-way valve with precision nitrogen purge braze" "VACUUM: 350 MICRONS" "COMPLETED" "#0869C9"

Generate-Theme-Photo "project-heatpump-coconutgrove.jpg" 600 380 $srcCentral 90 60 520 340 `
    "CORAL GABLES PROJECT" "Dual-Stage Defrost Control Board Diagnostic" "Resolved stubborn coil icing and restored winter heating capacity" "SYSTEM TESTED: 100%" "COMPLETED" "#0869C9"

Generate-Theme-Photo "project-heatpump-kendall.jpg" 600 380 $srcBuilding 80 50 550 350 `
    "KENDALL ESTATE PROJECT" "Multi-Split Heat Pump Electronic Expansion Valve" "Diagnosed stuck EEV, rebalanced charge and restored airflow" "DUAL ZONE VERIFIED" "COMPLETED" "#0869C9"


# ==============================================================================
# C. WATER HEATER REPAIR IMAGES (Theme Brand Colors Only: #0869C9, #FF5A1F)
# ==============================================================================
Generate-Theme-Photo "hero-water-heater-repair.jpg" 800 520 $srcCentral 40 30 700 460 `
    "HOT WATER RESTORATION" "Water Heater Diagnostics & Certified Repair" "Electric Storage, Gas Burners & High-Efficiency Tankless" "SAME-DAY SERVICE" "LICENSED" "#0869C9"

Generate-Theme-Photo "problem-waterheater-no-hot-water.jpg" 600 380 $srcTech 70 40 500 330 `
    "ZERO HOT WATER" "Water Heater Not Producing Hot Water" "Heating Element Continuity, Thermostat & Gas Valve Check" "OUTPUT TEMP: COLD" "FAULT 01" "#0869C9"

Generate-Theme-Photo "problem-waterheater-lukewarm.jpg" 600 380 $srcHeating 90 50 500 330 `
    "LOW TEMPERATURE" "Water Heater Only Producing Lukewarm Water" "Lower Heating Element & Broken Dip Tube Inspection" "MAX TEMP: <105°F" "FAULT 02" "#0869C9"

Generate-Theme-Photo "problem-waterheater-slow-recovery.jpg" 600 380 $srcFurnace 70 40 500 330 `
    "RECOVERY DELAY" "Water Heater Taking Too Long to Heat" "Heavy Sediment Accumulation & Reduced Element Wattage" "RECOVERY TIME: SLOW" "FAULT 03" "#0869C9"

Generate-Theme-Photo "problem-waterheater-tank-leak.jpg" 600 380 $srcReplacement 80 60 500 330 `
    "WATER LEAK" "Water Leaking Around Water Heater Base" "Isolating Fittings, Valves vs Internal Tank Shell Breach" "LEAK SOURCE: ISOLATED" "FAULT 04" "#FF5A1F"

Generate-Theme-Photo "problem-waterheater-popping-noise.jpg" 600 380 $srcHeating 60 40 510 330 `
    "RUMBLING NOISE" "Popping & Crackling Sounds From Tank" "Boiling Trapped Water Under Mineral Scale Sediment" "SEDIMENT LEVEL: HIGH" "FAULT 05" "#0869C9"

Generate-Theme-Photo "problem-waterheater-rusty-water.jpg" 600 380 $srcTech 90 50 500 330 `
    "WATER DISCOLORATION" "Rusty, Brown or Smelly Hot Water" "Sacrificial Anode Rod Depletion & Tank Lining Inspection" "ANODE ROD: DEPLETED" "FAULT 06" "#0869C9"

Generate-Theme-Photo "problem-waterheater-tripped-breaker.jpg" 600 380 $srcFurnace 60 30 520 340 `
    "ELECTRICAL SHORT" "Electric Water Heater Tripping Breaker" "Burnt 240V Heating Element Shorted to Ground Test" "RESISTANCE: 0 OHMS" "FAULT 07" "#FF5A1F"

Generate-Theme-Photo "problem-waterheater-pilot-out.jpg" 600 380 $srcFurnace 110 60 490 320 `
    "PILOT OUT" "Gas Water Heater Pilot Light Keeps Going Out" "Thermocouple Voltage, Gas Valve & Draft Hood Check" "THERMOCOUPLE: <15mV" "FAULT 08" "#0869C9"

Generate-Theme-Photo "problem-waterheater-tankless-error.jpg" 600 380 $srcHeatPump 80 50 510 330 `
    "TANKLESS FAULT" "Tankless Water Heater Error Code & Shutdown" "Heat Exchanger Descaling, Flow Sensor & Flame Rod" "ERROR CODE: RESOLVED" "FAULT 09" "#0869C9"

# NEW PROJECTS FOR WATER HEATER REPAIR
Generate-Theme-Photo "project-waterheater-miamibeach.jpg" 600 380 $srcSkyline 50 40 590 360 `
    "MIAMI BEACH CONDO PROJECT" "Oceanfront Tankless Water Heater Descaling" "Cleaned ignition sensors and descaled copper heat exchanger" "FLOW RATE: 6.2 GPM" "COMPLETED" "#0869C9"

Generate-Theme-Photo "project-waterheater-coralgables.jpg" 600 380 $srcCentral 70 50 530 340 `
    "CORAL GABLES ESTATE PROJECT" "Dual 4500W High-Grade Heating Elements" "Full upper/lower element and thermostat rebuild with testing" "WATER TEMP: 125°F STABLE" "COMPLETED" "#0869C9"

Generate-Theme-Photo "project-waterheater-kendall.jpg" 600 380 $srcBuilding 60 40 560 350 `
    "KENDALL RESIDENCE PROJECT" "Heavy-Duty Brass T&P Relief Valve Retrofit" "Eliminated garage floor flooding with code-compliant copper drain" "PRESSURE: 60 PSI STABLE" "COMPLETED" "#0869C9"

Write-Host "All theme-consistent images successfully generated!"
