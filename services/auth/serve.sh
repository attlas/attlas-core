#!/bin/bash -e
export $(cat ./.env | grep -v ^# | xargs)
export COMPONENT_PARAM_HOST=$(ifconfig getifaddr en0)
npm run serve
