#!/bin/bash

envFile=".env"

if [ -f "$envFile" ]
then
  . $envFile

  docker stop ${COMPOSE_PROJECT_NAME}-web ${COMPOSE_PROJECT_NAME}-db
  docker rm ${COMPOSE_PROJECT_NAME}-web ${COMPOSE_PROJECT_NAME}-db

  docker rmi ${COMPOSE_PROJECT_NAME}-portal:${SERVICE_VERSION} ${COMPOSE_PROJECT_NAME}-storage:${SERVICE_VERSION}

else
  echo "'$envFile' not found."
  echo "copy '.env.template' to '$envFile' and update it according to your environment"
fi

