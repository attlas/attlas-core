#!/bin/bash

echo "[+] Building ..."

echo " | [+] Frontend ..."
pushd frontend
npm i
npm run build
popd
echo " | [-] Frontend ..."

echo " | [+] Backend ..."
rm -rf ./devops/php/dist
pushd backend
popd
cp -r ./frontend/dist ./devops/php
echo " | [-] Backend"

echo " | [+] Mobile ..."
export ANDROID_HOME=/usr/lib/android-sdk
export PATH=$PATH:$ANDROID_HOME:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
export PATH=$PATH:/opt/gradle/gradle-3.4.1/bin

pushd mobile
cordova telemetry on
cordova platform add android
cordova clean android
cordova build android
popd
echo " | [-] Mobile"

echo "[-] Building"
