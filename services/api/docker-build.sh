#!/bin/bash

export $(cat ./../../.env | grep -v ^# | xargs)

artifactId=$(mvn help:evaluate -Dexpression=project.artifactId | grep -e "^[^\\[]")
version=$(mvn help:evaluate -Dexpression=project.version | grep -e "^[^\\[]")
export API_ARTIFACT=$artifactId-$version-jar-with-dependencies.jar

docker build -t com.attlas.api \
    --build-arg API_ARTIFACT=$API_ARTIFACT\
    --build-arg API_HOSTNAME=$API_HOSTNAME \
    --build-arg API_PORT=$API_PORT \
    .
