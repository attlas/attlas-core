#!/bin/bash -e

# can be used for standalon project
: '
export $(cat ./.env | grep -v ^# | xargs)
'

# export configuration from the top level of microservice
#: '
export $(cat ./../../.env | grep -v ^# | xargs)
export COMPONENT_VERSION=${PROJECT_VERSION}
export COMPONENT_ID="${PROJECT_ID}.static.client"
export COMPONENT_PARAM_HOST=${STATIC_CLIENT_HOST}
export COMPONENT_PARAM_LSTN=${STATIC_CLIENT_LSTN}
export COMPONENT_PARAM_PORT=${STATIC_CLIENT_PORT}
export COMPONENT_PARAM_PORTS=${STATIC_CLIENT_PORTS}
#'

export COMPONENT_PARAM_AUTH_HOST=${SERVICES_AUTH_HOST}
export COMPONENT_PARAM_AUTH_PORT=${SERVICES_AUTH_PORT}

printenv | grep COMPONENT_
