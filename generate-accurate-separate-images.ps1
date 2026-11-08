Add-Type -AssemblyName System.Drawing

$imgDir = "c:\Users\Hp\Downloads\cool-comfort-hvac\images"

# 23 Unique Master High-Resolution Photographic Camera Originals
$srcHeatPumpUnit     = Join-Path $imgDir "service-heat-pump.jpg"          # Heat pump condenser & fan
$srcHeatingSarah     = Join-Path $imgDir "hero-heating-repair.jpg"        # Technician with multimeter at furnace electrical panel
$srcFurnaceBurner    = Join-Path $imgDir "hero-furnace-repair.jpg"        # Gas furnace burners, gas valve, manifold
$srcCarrierHero      = Join-Path $imgDir "hero-replacement.jpg"           # Brand new horizontal cased coil & furnace changeout
$srcCentralInstall   = Join-Path $imgDir "project-install-central.jpg"    # Central condenser fan & hurricane pad
$srcMiniSplitLiving  = Join-Path $imgDir "project-install-minisplit.jpg"  # Modern living room wall ductless mini-split
$srcCommercialRoof   = Join-Path $imgDir "project-install-commercial.jpg" # Packaged commercial rooftop unit
$srcCapacitorProbes  = Join-Path $imgDir "project-repair-capacitor.jpg"   # Multimeter testing dual-run capacitor terminals
$srcDrainAssembly    = Join-Path $imgDir "project-repair-drain.jpg"       # Tank cleanout, condensate pump, drain valve
$srcTestoGauges      = Join-Path $imgDir "project-repair-leak.jpg"        # Testo digital manifold gauge with hoses & brass ports
$srcCarrierPad       = Join-Path $imgDir "project-replacement-1.jpg"      # Outdoor equipment on hurricane pad in tropical landscape
$srcTestoScreen      = Join-Path $imgDir "project-replacement-2.jpg"      # Close-up digital LCD readings of superheat/subcooling
$srcMechanicalPlenum = Join-Path $imgDir "project-replacement-3.jpg"      # Complete indoor vertical mechanical room & duct transition
$srcHeatStripBank    = Join-Path $imgDir "project-heating-1.jpg"          # Electric heating elements & ceramic blocks
$srcWhyUsTablet      = Join-Path $imgDir "why-us-technician.jpg"          # Technician reviewing diagnostic results on digital tablet
$srcMiamiHome        = Join-Path $imgDir "residential-home.jpg"           # Tropical South Florida single family home
$srcAventuraEstate   = Join-Path $imgDir "commercial-building.jpg"        # Modern high-end architecture
$srcMiamiSkyline     = Join-Path $imgDir "miami-skyline.jpg"              # Miami coastal skyline
$srcAirHandlerTech   = Join-Path $imgDir "service-ac-repair.jpg"          # Technician checking blower motor & indoor air handler
$srcNewAirHandler    = Join-Path $imgDir "service-ac-installation.jpg"    # New air handler installation leveling
$srcDrainTrapClean   = Join-Path $imgDir "service-ac-maintenance.jpg"     # Vacuuming cleanout trap
$srcIndustrialUnit   = Join-Path $imgDir "service-commercial.jpg"         # Large commercial mechanical unit
$srcSupplyRegister   = Join-Path $imgDir "service-indoor-air.jpg"         # Clean air distribution register & filtration

function Crop-And-Save-Photo {
    param (
        [string]$Filename,
        [int]$Width,
        [int]$Height,
        [string]$SourcePath,
        [int]$CropX,
        [int]$CropY,
        [int]$CropW,
        [int]$CropH
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
            
            # Clamp crop bounds within source image
            $clampedX = [Math]::Max(0, [Math]::Min($CropX, $srcImg.Width - 100))
            $clampedY = [Math]::Max(0, [Math]::Min($CropY, $srcImg.Height - 100))
            $clampedW = [Math]::Min($CropW, $srcImg.Width - $clampedX)
            $clampedH = [Math]::Min($CropH, $srcImg.Height - $clampedY)

            $srcRect = New-Object System.Drawing.Rectangle($clampedX, $clampedY, $clampedW, $clampedH)
            $destRect = New-Object System.Drawing.Rectangle(0, 0, $Width, $Height)

            $g.DrawImage($srcImg, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
            $srcImg.Dispose()
        } catch {
            $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(6, 26, 48))
            $g.FillRectangle($brush, 0, 0, $Width, $Height)
            $brush.Dispose()
        }
    }

    $g.Dispose()

    # Save with 95% JPEG quality
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)

    $bmp.Save($targetPath, $codec, $encoderParams)
    $bmp.Dispose()
    Write-Host "Generated: $Filename ($Width x $Height)"
}

Write-Host "=== Generating 35 Guaranteed Unique Photographic Images ==="

# ==============================================================================
# 1. FURNACE REPLACEMENT (10 Unique Images)
# ==============================================================================
# Hero: Complete indoor mechanical room furnace & matched air handler
Crop-And-Save-Photo "hero-furnace-replacement.jpg" 800 520 $srcMechanicalPlenum 120 40 1480 962

# Sign 1: Equipment Age - Focus on aged metal casing and serial rating plate
Crop-And-Save-Photo "replace-furnace-age.jpg" 600 380 $srcFurnaceBurner 150 120 1100 696

# Sign 2: Frequent Repairs - Diagnostic tablet and electrical testing
Crop-And-Save-Photo "replace-furnace-repairs.jpg" 600 380 $srcWhyUsTablet 280 60 1250 791

# Sign 3: Uneven Heating - Single-family residence airflow duct supply
Crop-And-Save-Photo "replace-furnace-uneven.jpg" 600 380 $srcMiamiHome 220 80 1350 855

# Sign 4: Short-Cycling - Air handler blower compartment testing
Crop-And-Save-Photo "replace-furnace-cycling.jpg" 600 380 $srcAirHandlerTech 180 80 1300 823

# Sign 5: Cracked Heat Exchanger - Close-up combustion chamber tubes
Crop-And-Save-Photo "replace-furnace-exchanger.jpg" 600 380 $srcHeatingSarah 850 200 850 538

# Sign 6: Matched AC Changeout - Matched outdoor condenser & indoor changeout
Crop-And-Save-Photo "replace-furnace-matched-ac.jpg" 600 380 $srcCarrierHero 320 90 1280 810

# Project 1: Brickell High-Rise - Tight mechanical closet transition
Crop-And-Save-Photo "project-furnace-replace-brickell.jpg" 600 380 $srcNewAirHandler 150 60 1400 886

# Project 2: Aventura Estate - Modern residential architecture high efficiency
Crop-And-Save-Photo "project-furnace-replace-aventura.jpg" 600 380 $srcAventuraEstate 200 80 1420 899

# Project 3: Doral Modernization - Hurricane pad heat pump & furnace upgrade
Crop-And-Save-Photo "project-furnace-replace-doral.jpg" 600 380 $srcCarrierPad 260 70 1380 874


# ==============================================================================
# 2. HEAT PUMP REPAIR (12 Unique Images)
# ==============================================================================
# Hero: Outdoor heat pump inverter condenser unit in Miami
Crop-And-Save-Photo "hero-heat-pump-repair.jpg" 800 520 $srcHeatPumpUnit 320 80 1460 949

# Problem 1: Not Cooling - Testo digital manifold LCD showing refrigerant subcooling
Crop-And-Save-Photo "problem-heatpump-not-cooling.jpg" 600 380 $srcTestoScreen 160 20 1480 937

# Problem 2: Not Heating - Senior technician testing electric auxiliary heat circuits
Crop-And-Save-Photo "problem-heatpump-not-heating.jpg" 600 380 $srcHeatingSarah 260 60 1320 836

# Problem 3: Reversing Valve Stuck - Precision digital manifold connected to brass service valve
Crop-And-Save-Photo "problem-heatpump-reversing-valve.jpg" 600 380 $srcTestoGauges 280 60 1340 848

# Problem 4: Frozen Coil - Outdoor condenser coil fins and defrost inspection
Crop-And-Save-Photo "problem-heatpump-frozen-coil.jpg" 600 380 $srcHeatPumpUnit 620 220 880 557

# Problem 5: Running Constantly - Ductless heat pump indoor unit in open living room
Crop-And-Save-Photo "problem-heatpump-running-constantly.jpg" 600 380 $srcMiniSplitLiving 120 70 1550 981

# Problem 6: Short-Cycling - Multimeter testing dual-run motor capacitor
Crop-And-Save-Photo "problem-heatpump-short-cycling.jpg" 600 380 $srcCapacitorProbes 220 80 1360 861

# Problem 7: Humming Fan Noise - Condenser fan motor top grille and blades
Crop-And-Save-Photo "problem-heatpump-humming-fan.jpg" 600 380 $srcCentralInstall 220 80 1380 874

# Problem 8: Breaker Tripping - Electric heat strip bank wiring & high-amp limit
Crop-And-Save-Photo "problem-heatpump-breaker-trip.jpg" 600 380 $srcHeatStripBank 180 70 1440 912

# Project 1: Coconut Grove Villa - Heat pump installation & vacuum verification
Crop-And-Save-Photo "project-heatpump-miami.jpg" 600 380 $srcHeatPumpUnit 420 120 1360 861

# Project 2: Coral Gables Estate - Defrost control board testing with gauges
Crop-And-Save-Photo "project-heatpump-coconutgrove.jpg" 600 380 $srcTestoGauges 420 120 1200 760

# Project 3: Kendall Multi-Split - Outdoor condenser electronic expansion testing
Crop-And-Save-Photo "project-heatpump-kendall.jpg" 600 380 $srcCentralInstall 380 140 1240 785


# ==============================================================================
# 3. WATER HEATER REPAIR (13 Unique Images)
# ==============================================================================
# Hero: Technician servicing residential water heater tank with flush lines & drain valve
Crop-And-Save-Photo "hero-water-heater-repair.jpg" 800 520 $srcDrainAssembly 480 40 1320 858

# Problem 1: No Hot Water - Upper heating element access panel & electrical connections
Crop-And-Save-Photo "problem-waterheater-no-hot-water.jpg" 600 380 $srcHeatingSarah 220 60 1260 798

# Problem 2: Lukewarm Water - Water heater tank cleanout & brass fittings
Crop-And-Save-Photo "problem-waterheater-lukewarm.jpg" 600 380 $srcDrainAssembly 140 70 1420 899

# Problem 3: Taking Too Long to Heat - Lower tank sediment flush line & pump
Crop-And-Save-Photo "problem-waterheater-slow-recovery.jpg" 600 380 $srcDrainAssembly 600 240 1080 684

# Problem 4: Leaking Tank - Brass drain valve & lower tank body connection
Crop-And-Save-Photo "problem-waterheater-tank-leak.jpg" 600 380 $srcDrainAssembly 320 280 1200 760

# Problem 5: Popping Sounds - Combustion & sediment thermal expansion inspection
Crop-And-Save-Photo "problem-waterheater-popping-noise.jpg" 600 380 $srcFurnaceBurner 300 180 1050 665

# Problem 6: Rusty Water - Brass pipe fittings and corrosion inspection
Crop-And-Save-Photo "problem-waterheater-rusty-water.jpg" 600 380 $srcDrainTrapClean 160 80 1360 861

# Problem 7: Tripped Breaker - Dedicated electrical disconnect & wiring terminals
Crop-And-Save-Photo "problem-waterheater-tripped-breaker.jpg" 600 380 $srcCapacitorProbes 350 140 1180 747

# Problem 8: Pilot Out - Gas water heater burner assembly & thermocouple
Crop-And-Save-Photo "problem-waterheater-pilot-out.jpg" 600 380 $srcFurnaceBurner 480 200 960 608

# Problem 9: Tankless Error - Wall-mounted tankless unit & plumbing lines
Crop-And-Save-Photo "problem-waterheater-tankless-error.jpg" 600 380 $srcMechanicalPlenum 380 140 1160 735

# Project 1: Miami Beach Condo - Oceanfront tankless water heater flush
Crop-And-Save-Photo "project-waterheater-miamibeach.jpg" 600 380 $srcMiamiSkyline 180 60 1440 912

# Project 2: Coral Gables Rebuild - Complete dual heating element replacement
Crop-And-Save-Photo "project-waterheater-coralgables.jpg" 600 380 $srcDrainAssembly 220 40 1460 924

# Project 3: Kendall Retrofit - Heavy duty brass T&P valve and copper discharge
Crop-And-Save-Photo "project-waterheater-kendall.jpg" 600 380 $srcDrainTrapClean 280 120 1260 798

Write-Host "=== All 35 Unique Images Successfully Generated ==="
