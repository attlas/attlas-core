#!/bin/bash -e
export $(cat ./.env | grep -v ^# | xargs)
export PROJECT_PARAM_HOST=$(ifconfig eth0 | grep 'inet addr' | cut -d: -f2 | awk '{print $1}')
export PROJECT_PARAM_AUTH_HOST=$(ifconfig eth0 | grep 'inet addr' | cut -d: -f2 | awk '{print $1}')
envsubst < src/environments/consts.ts.template > src/environments/consts.ts
ng serve --host=${PROJECT_PARAM_LSTN} --port=${PROJECT_PARAM_PORT}
