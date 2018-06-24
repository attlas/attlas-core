#!/bin/bash -e
export $(cat ./.env | grep -v ^# | xargs)
export COMPONENT_PARAM_HOST=$(ipconfig getifaddr en0)
npm run serve
