#!/bin/bash -e

if [ -f './.env' ]; then
  echo '## Export variables from local .env file'
  export $(cat ./.env | grep -v ^# | xargs)
fi

printenv | grep COMPONENT_ | sort
