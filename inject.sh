#!/bin/bash
cd ./bot/0ADroid
tar -czvf 0ADroid.zip simulation/
cd ../..
mkdir -p /home/alexa/.local/share/0ad/mods/0ADroid
cp ./bot/0ADroid/mod.json /home/alexa/.local/share/0ad/mods/0ADroid/
cp ./bot/0ADroid/0ADroid.zip /home/alexa/.local/share/0ad/mods/0ADroid/
echo "0ADroid has been injected into 0 A.D. mods directory"