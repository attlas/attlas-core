#!/bin/bash -e

pushd static/client
./build.prod.sh
./docker.build.sh
./docker.save.sh
popd

