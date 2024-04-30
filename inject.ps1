# PowerShell
$env:USERPROFILE = [Environment]::GetEnvironmentVariable("USERPROFILE")
cd .\bot\0ADroid\simulation
Move-Item -Path .\common-api -Destination ..\..\common-api -Force
Compress-Archive -Path .\* -DestinationPath ..\0ADroid.zip -Force
Move-Item -Path ..\..\common-api -Destination .\common-api -Force
cd ..
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\Documents\My Games\0ad\mods\0ADroid"
Copy-Item .\mod.json -Destination "$env:USERPROFILE\Documents\My Games\0ad\mods\0ADroid\"
Copy-Item .\0ADroid.zip -Destination "$env:USERPROFILE\Documents\My Games\0ad\mods\0ADroid\"
Remove-Item -Path .\0ADroid.zip -Force
Write-Host "0ADroid has been injected into 0 A.D. mods directory"