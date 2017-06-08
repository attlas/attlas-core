#!/bin/bash

set -a
. .env
set +a

pushd devops
docker-compose up -d 
popd