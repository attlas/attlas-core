#!/bin/bash -e
export $(cat ./../../.env | grep -v ^# | xargs)
export SERVICES_COMPARATOR_HOST=$(ipconfig getifaddr en0)
npm test
