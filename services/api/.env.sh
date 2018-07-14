#!/bin/bash -e

export $(cat ./../../.env | grep -v ^# | xargs)
export COMPONENT_ID="${PROJECT_ID}.api"
export COMPONENT_VERSION=${PROJECT_VERSION}
export COMPONENT_PARAM_HOST=${SERVICES_API_HOST}
export COMPONENT_PARAM_LSTN=${SERVICES_API_LSTN}
export COMPONENT_PARAM_PORT=${SERVICES_API_PORT}
export COMPONENT_PARAM_PORTS=${SERVICES_API_PORTS}
printenv | grep COMPONENT