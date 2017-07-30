#!/bin/bash

envFile=".env"

if [ -f "$envFile" ]
then
  . $envFile

  sudo docker stop web db
  sudo docker rm web db

else
  echo "'$envFile' not found."
  echo "copy '.env.template' to '$envFile' and update it according to your environment"
fi

