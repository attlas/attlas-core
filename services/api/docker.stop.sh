#!/bin/bash

. ./.env.sh
docker stop ${COMPONENT_ID}
docker rmi ${COMPONENT_ID}:${COMPONENT_VERSION}
