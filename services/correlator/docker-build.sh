#!/bin/bash

export $(cat ./../../.env | grep -v ^# | xargs)

docker build -t com.attlas.services.correlator \
    --build-arg SERVICES_CORRELATOR_HOST=$SERVICES_CORRELATOR_HOST\
    --build-arg SERVICES_CORRELATOR_LSTN=$SERVICES_CORRELATOR_LSTN\
    --build-arg SERVICES_CORRELATOR_PORT=$SERVICES_CORRELATOR_PORT\
    --build-arg SERVICES_CORRELATOR_PORTS=$SERVICES_CORRELATOR_PORTS\
    .
