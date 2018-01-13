#!/bin/bash

export $(cat ./../../.env | grep -v ^# | xargs)

docker run -d -p $API_PORT:$API_PORT --rm --name com.attlas.api com.attlas.api