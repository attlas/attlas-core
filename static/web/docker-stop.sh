#!/bin/bash

export $(cat ./../../.env | grep -v ^# | xargs)

docker stop com.attlas.web
docker rmi com.attlas.web
