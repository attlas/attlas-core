#!/bin/bash -e
export $(cat ./.env | grep -v ^# | xargs)
docker stop ${COMPONENT_NAME}
docker rmi ${COMPONENT_NAME}:${COMPONENT_VERSION}
