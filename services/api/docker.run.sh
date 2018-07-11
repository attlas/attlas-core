#!/bin/bash

. ./.env.sh
docker run -d --rm \
  -p ${COMPONENT_PARAM_PORT}:80 \
  --name ${COMPONENT_ID} \
  ${COMPONENT_ID}:${COMPONENT_VERSION}
