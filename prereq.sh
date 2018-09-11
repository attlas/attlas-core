#!/bin/bash -e

export $(cat ./.env | grep -v ^# | xargs)

pushd static/client
./prereq.sh
popd

pushd services/auth
./prereq.sh
popd

pushd services/api
#./prereq.sh
popd

pushd services/correlator
#./prereq.sh
popd
