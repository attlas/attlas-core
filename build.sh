#!/bin/bash -e

pushd static/client
./prereq.sh
./build.sh
popd

pushd services/auth
./prereq.sh
#./build.sh
popd

pushd services/api
./build.sh
popd

pushd services/correlator
./prereq.sh
#./build.sh
popd


