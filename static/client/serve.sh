#!/bin/bash -e
export $(cat ./.env | grep -v ^# | xargs)
export COMPONENT_PARAM_HOST=$(ifconfig eth0 | grep 'inet addr' | cut -d: -f2 | awk '{print $1}')
export COMPONENT_PARAM_AUTH_HOST=$(ifconfig eth0 | grep 'inet addr' | cut -d: -f2 | awk '{print $1}')
envsubst < src/environments/consts.ts.template > src/environments/consts.ts
ng serve --host=${COMPONENT_PARAM_LSTN} --port=${COMPONENT_PARAM_PORT}
