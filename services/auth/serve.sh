#!/bin/bash -e
. ./.env.sh
case "$(uname -s)" in
   Darwin)
     export COMPONENT_PARAM_HOST=$(ipconfig getifaddr en0)
     ;;
   Linux)
     export COMPONENT_PARAM_HOST=$(ifconfig eth0 | grep 'inet addr' | cut -d: -f2 | awk '{print $1}')
     ;;
esac
npm run serve
