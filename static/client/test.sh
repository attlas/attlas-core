#!/bin/bash -e
export $(cat ./.env | grep -v ^# | xargs)
ng test com.attlas.static.client --code-coverage
