#!/bin/bash

envFile=".env"

if [ -f "$envFile" ]
then
  . $envFile

  # configure apache
  cp ./devops/apache.conf ./devops/php/$SERVICE_HOST.conf
  cp ./devops/apache-php.ini ./devops/php/php.ini

  sed -i "s/SERVICE_HOST_EMAIL/$SERVICE_HOST_EMAIL/" ./devops/php/$SERVICE_HOST.conf
  sed -i "s/SERVICE_HOST/$SERVICE_HOST/" ./devops/php/$SERVICE_HOST.conf

  docker-compose -f service.yml up $1

else
  echo "'$envFile' not found."
  echo "copy '.env.template' to '$envFile' and update it according to your environment"
fi

