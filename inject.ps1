# PowerShell
$env:USERPROFILE = [Environment]::GetEnvironmentVariable("USERPROFILE")
cd .\bot\0ADroid\simulation
Move-Item -Path .\..\mod.json -Destination ..\..\mod.json -Force

# Use 7-Zip to create a zip file with zero compression
& 'C:\Program Files\7-Zip\7z.exe' a -mx0 ..\0ADroid.zip .\..\*

Move-Item -Path ..\..\mod.json -Destination .\..\mod.json -Force
cd ..
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\Documents\My Games\0ad\mods\0ADroid"
Copy-Item .\mod.json -Destination "$env:USERPROFILE\Documents\My Games\0ad\mods\0ADroid\"
Copy-Item .\0ADroid.zip -Destination "$env:USERPROFILE\Documents\My Games\0ad\mods\0ADroid\"
Remove-Item -Path .\0ADroid.zip -Force
Write-Host "0ADroid has been injected into 0 A.D. mods directory"