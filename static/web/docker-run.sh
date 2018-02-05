#!/bin/bash

export $(cat ./../../.env | grep -v ^# | xargs)

docker run -d \
  -p $WEB_PORT:$WEB_PORT \
  --rm \
  --name com.attlas.web com.attlas.web