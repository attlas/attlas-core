#!/bin/bash

envFile=".env"

if [ -f "$envFile" ]
then
  . $envFile

  docker run -d --name ${COMPOSE_PROJECT_NAME}-db ${COMPOSE_PROJECT_NAME}-storage:$SERVICE_VERSION
  docker run -d -p 80:80 --name ${COMPOSE_PROJECT_NAME}-web --link ${COMPOSE_PROJECT_NAME}-db:db ${COMPOSE_PROJECT_NAME}-portal:$SERVICE_VERSION

else
  echo "'$envFile' not found."
  echo "copy '.env.template' to '$envFile' and update it according to your environment"
fi

