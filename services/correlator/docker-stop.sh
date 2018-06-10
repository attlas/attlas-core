#!/bin/bash

export $(cat ./../../.env | grep -v ^# | xargs)

docker stop com.attlas.services.correlator
docker rmi com.attlas.services.correlator
