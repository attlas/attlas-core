#!/bin/bash -e
export $(cat ./../../.env | grep -v ^# | xargs)
#printenv | grep SERVICES
npm run dev
