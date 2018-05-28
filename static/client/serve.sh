#!/bin/bash -e
export $(cat ./../../.env | grep -v ^# | xargs)
export SERVICES_AUTH_HOST=$(ipconfig getifaddr en0)
envsubst < src/environments/consts.ts.template > src/environments/consts.ts
ng server --host=${STATIC_CLIENT_LISTEN} --port=${STATIC_CLIENT_PORT}
