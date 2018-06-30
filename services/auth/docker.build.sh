#!/bin/bash -e
export $(cat ./.env | grep -v ^# | xargs)
docker build -t ${COMPONENT_KEY}:${COMPONENT_VERSION} .
