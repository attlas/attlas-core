#!/bin/bash -e
export $(cat ./../../.env | grep -v ^# | xargs)
envsubst < src/environments/consts.ts.template > src/environments/consts.ts
ng server --host=${STATIC_CLIENT_LISTEN} --port=${STATIC_CLIENT_PORT}
