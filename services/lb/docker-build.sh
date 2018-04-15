#!/bin/bash

export $(cat ./../../.env | grep -v ^# | xargs)

docker build -t com.attlas.lb \
    --build-arg COMPOSE_PROJECT_NAME=$COMPOSE_PROJECT_NAME \
    --build-arg LB_STATIC_CLIENT_NAME=$LB_STATIC_CLIENT_NAME \
    --build-arg LB_STATIC_CLIENT_NUM=$LB_STATIC_CLIENT_NUM \
    --build-arg LB_SERVICES_API_NAME=$LB_SERVICES_API_NAME \
    --build-arg LB_SERVICES_API_NUM=$LB_SERVICES_API_NUM \
    --build-arg CLIENT_PORT=$CLIENT_PORT \
    --build-arg CLIENT_PORTS=$CLIENT_PORTS \
    --build-arg API_PORT=$API_PORT \
    .
