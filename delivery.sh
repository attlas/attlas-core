#!/bin/bash -e

pushd static/client
./build.prod.sh
./docker.build.sh
./docker.save.sh
popd

pushd services/auth
./docker.build.sh
./docker.save.sh
popd

pushd services/api
popd

pushd services/correlator
popd
