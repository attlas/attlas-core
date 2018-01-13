#!/bin/bash

: << comment
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

comment
