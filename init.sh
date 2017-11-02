#!/bin/bash


envFile=".env"

if [ -f "$envFile" ]
then
  . $envFile

  if [ "$1" == "cordova" ]; then
    echo --- Init Cordova project ---
    pushd mobile
    cordova create . $SERVICE_ID "$SERVICE_DESC"
    cordova platform add android
    popd
  fi

else
  echo "'$envFile' not found."
  echo "copy '.env.template' to '$envFile' and update it according to your environment"
fi


