#!/bin/bash
cd ./bot/0ADroid
zip -0 -r 0ADroid.zip --exclude=simulation/common-api simulation/
cd ../..
mkdir -p /home/alexa/.local/share/0ad/mods/0ADroid
cp ./bot/0ADroid/mod.json /home/alexa/.local/share/0ad/mods/0ADroid/
cp ./bot/0ADroid/0ADroid.zip /home/alexa/.local/share/0ad/mods/0ADroid/
rm ./bot/0ADroid/0ADroid.zip
echo "0ADroid has been injected into 0 A.D. mods directory"