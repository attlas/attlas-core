#!/bin/bash -e
. ./.env.sh
export COMPONENT_PARAM_HOST=localhost
case "$(uname -s)" in
   Darwin)
     export COMPONENT_PARAM_HOST=$(ipconfig getifaddr en0)
     ;;
   Linux)
     export COMPONENT_PARAM_HOST=$(ifconfig eth0 | grep 'inet addr' | cut -d: -f2 | awk '{print $1}')
     ;;
esac
export COMPONENT_PARAM_AUTH_HOST=${COMPONENT_PARAM_HOST}
ng serve --host=${COMPONENT_PARAM_LSTN} --port=${COMPONENT_PARAM_PORT}
