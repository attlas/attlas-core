#!/bin/bash

export $(cat ./../../.env | grep -v ^# | xargs)

docker stop com.attlas.api
docker rmi com.attlas.api
