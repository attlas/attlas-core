#!/bin/bash -e
export $(cat ./../../.env | grep -v ^# | xargs)
cordova build android
