#!/bin/bash

envFile=".env"

if [ -f "$envFile" ]
then
  . $envFile

  FOLDER=`echo ${PWD##*/} | sed -r 's/-//g'`

  sudo docker commit ${FOLDER}_web_1 ${SERVICE_NAME}-portal:${SERVICE_VERSION}
  sudo docker commit ${FOLDER}_db_1 ${SERVICE_NAME}-storage:${SERVICE_VERSION}

else
  echo "'$envFile' not found."
  echo "copy '.env.template' to '$envFile' and update it according to your environment"
fi
