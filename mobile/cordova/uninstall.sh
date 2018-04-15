#!/bin/bash -e
export $(cat ./../../.env | grep -v ^# | xargs)
adb uninstall $PROJECT_ID
