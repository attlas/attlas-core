#!/bin/bash

export $(cat ./.env | grep -v ^# | xargs)

docker build \
    --build-arg COMPONENT_PARAM_PORT=$COMPONENT_PARAM_PORT \
    -t ${COMPONENT_KEY}:${COMPONENT_VERSION} .
