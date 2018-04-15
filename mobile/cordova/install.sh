#!/bin/bash -e
export $(cat ./../../.env | grep -v ^# | xargs)
adb install platforms/android/app/build/outputs/apk/debug/app-debug.apk
