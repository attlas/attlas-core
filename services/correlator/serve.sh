#!/bin/bash -e
export $(cat ./../../.env | grep -v ^# | xargs)
export SERVICES_CORRELATOR_HOST=$(ipconfig getifaddr en0)
npm run dev
