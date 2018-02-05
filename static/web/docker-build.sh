#!/bin/bash

export $(cat ./../../.env | grep -v ^# | xargs)

docker build -t com.attlas.web \
    .
