#!/bin/bash -e
export $(cat ./.env | grep -v ^# | xargs)
export PROJECT_PARAM_HOST=$(ipconfig getifaddr en0)
export PROJECT_PARAM_AUTH_HOST=$(ipconfig getifaddr en0)
envsubst < src/environments/consts.ts.template > src/environments/consts.ts
ng serve --host=${PROJECT_PARAM_LSTN} --port=${PROJECT_PARAM_PORT}
