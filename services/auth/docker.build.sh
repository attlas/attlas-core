#!/bin/bash -e
export $(cat ./.env | grep -v ^# | xargs)
docker build -t ${COMPONENT_NAME}:${COMPONENT_VERSION} .
