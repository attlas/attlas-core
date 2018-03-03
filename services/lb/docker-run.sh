#!/bin/bash

export $(cat ./../../.env | grep -v ^# | xargs)

docker run -d \
  -p $CLIENT_PORT:$CLIENT_PORT \
  -p $CLIENT_PORTS:$CLIENT_PORTS \
  -p $API_PORT:$API_PORT \
  --rm \
  --name com.attlas.lb com.attlas.lb