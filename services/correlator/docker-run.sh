#!/bin/bash

export $(cat ./../../.env | grep -v ^# | xargs)

docker run -p ${SERVICES_CORRELATOR_PORT}:${SERVICES_CORRELATOR_PORT} -d --rm --name com.attlas.services.correlator com.attlas.services.correlator