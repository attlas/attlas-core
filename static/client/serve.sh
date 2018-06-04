#!/bin/bash -e
<<<<<<< HEAD
export $(cat ./../../.env | grep -v ^# | xargs)
export SERVICES_AUTH_HOST=$(ipconfig getifaddr en0)
envsubst < src/environments/consts.ts.template > src/environments/consts.ts
ng server --host=${STATIC_CLIENT_LISTEN} --port=${STATIC_CLIENT_PORT}
=======
export $(cat ./.env | grep -v ^# | xargs)
ng server --host=${PROJECT_PARAM_LSTN} --port=${PROJECT_PARAM_PORT}
>>>>>>> 78610877adcb5167357efbdadf1497dc23b46979
