#!/bin/bash -e
export $(cat ./../../.env | grep -v ^# | xargs)
export SERVICES_AUTH_HOST=$(ipconfig getifaddr en0)
#printenv | grep SERVICES
npm run dev
