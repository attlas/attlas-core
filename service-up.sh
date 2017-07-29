#!/bin/bash

envFile=".env"

if [ -f "$envFile" ]
then
  . $envFile

  # configure apache
  cp ./devops/apache.conf ./devops/php/$SERVICE_DOMAIN.conf
  cp ./devops/apache-php.ini ./devops/php/php.ini

  sed -i "s/%SERVICE_DOMAIN%/$SERVICE_DOMAIN/" ./devops/php/$SERVICE_DOMAIN.conf
  sed -i "s/%SERVICE_DOMAIN_EMAIL%/$SERVICE_DOMAIN_EMAIL/" ./devops/php/$SERVICE_DOMAIN.conf

  docker-compose -f service.yml up $1

else
  echo "'$envFile' not found."
  echo "copy '.env.template' to '$envFile' and update it according to your environment"
fi

