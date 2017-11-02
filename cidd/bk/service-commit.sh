#!/bin/bash

envFile=".env"

if [ -f "$envFile" ]
then
  . $envFile

  docker commit ${COMPOSE_PROJECT_NAME}_web_1 ${COMPOSE_PROJECT_NAME}-portal:${SERVICE_VERSION}
  docker commit ${COMPOSE_PROJECT_NAME}_db_1 ${COMPOSE_PROJECT_NAME}-storage:${SERVICE_VERSION}

else
  echo "'$envFile' not found."
  echo "copy '.env.template' to '$envFile' and update it according to your environment"
fi
