#!/bin/bash

envFile="./.env"

if [ -f "$envFile" ]
then
  . $envFile

  # -----------------------
  # configure load balancer
  rm -rf ./cidd/lb/dist
  mkdir ./cidd/lb/dist
  cp ./cidd/lb/nginx.conf.template ./cidd/lb/dist/nginx.conf
  # ...
  sed -i "s/%WORKER_PROCESSES%/$LB_STATIC_NUM/" ./cidd/lb/dist/nginx.conf
  # ...
  ALLSERVERS=''
  for i in $(seq 1 $LB_STATIC_NUM)
  do
    ALLSERVERS="$ALLSERVERS\nserver ${COMPOSE_PROJECT_NAME}_${LB_STATIC_NAME}_$i;"
  done
  sed -i "s/%ALLSERVERS%/$ALLSERVERS/" ./cidd/lb/dist/nginx.conf

  # [+] static
  rm -rf ./cidd/static/dist
  cp -r ./static/dist ./cidd/static
  # [-] static

  # configure apache
  #cp ./cidd/apache.conf ./cidd/php/$XASS_DOMAIN.conf
  #cp ./cidd/apache-php.ini ./cidd/php/php.ini

  #sed -i "s/%XASS_DOMAIN%/$XASS_DOMAIN/" ./cidd/php/$XASS_DOMAIN.conf
  #sed -i "s/%XASS_DOMAIN_EMAIL%/$XASS_DOMAIN_EMAIL/" ./cidd/php/$XASS_DOMAIN.conf

  # [+] service
  pushd service
  export SERVICE_ARTIFACT=$(mvn -q -Dexec.executable="echo" -Dexec.args='${project.artifactId}-${project.version}-jar-with-dependencies.${project.packaging}' --non-recursive org.codehaus.mojo:exec-maven-plugin:1.3.1:exec)
  popd
  rm -rf ./cidd/service/dist
  mkdir ./cidd/service/dist
  cp "./service/target/${SERVICE_ARTIFACT}" ./cidd/service/dist
  # [-] service

  docker-compose -f attlas.yml scale $LB_STATIC_NAME=$LB_STATIC_NUM $LB_SERVICE_NAME=$LB_SERVICE_NUM
  docker-compose -f attlas.yml up $1

else
  echo "'$envFile' not found."
  echo "copy '.env.template' to '$envFile' and update it according to your environment"
fi

