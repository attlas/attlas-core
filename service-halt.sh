#!/bin/bash

envFile=".env"

if [ -f "$envFile" ]
then
  . $envFile

  docker stop web db
  docker rm web db

else
  echo "'$envFile' not found."
  echo "copy '.env.template' to '$envFile' and update it according to your environment"
fi

