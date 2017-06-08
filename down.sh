#!/bin/bash

set -a
. .env
set +a

pushd devops
docker-compose down --rmi all
popd
