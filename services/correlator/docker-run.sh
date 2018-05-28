#!/bin/bash

export $(cat ./../../.env | grep -v ^# | xargs)

docker run -d --rm --name com.attlas.services.correlator com.attlas.service.correlator