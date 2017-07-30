#!/bin/bash

envFile=".env"

if [ -f "$envFile" ]
then
  . $envFile

  sudo docker run -d --name db ${SERVICE_NAME}-storage:$SERVICE_VERSION
  sudo docker run -d -p 80:80 --name web --link db:db ${SERVICE_NAME}-portal:$SERVICE_VERSION

else
  echo "'$envFile' not found."
  echo "copy '.env.template' to '$envFile' and update it according to your environment"
fi

