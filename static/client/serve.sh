#!/bin/bash -e
export $(cat ./../../.env | grep -v ^# | xargs)
envsubst < src/environments/hosts.ts.template > src/environments/hosts.ts
ng server --host=0.0.0.0
