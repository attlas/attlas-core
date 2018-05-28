#!/bin/bash -e

export $(cat ./../../.env | grep -v ^# | xargs)
envsubst < .env.template > .env
export SERVICES_CORRELATOR_HOST=$(ipconfig getifaddr en0)

npm run serve
