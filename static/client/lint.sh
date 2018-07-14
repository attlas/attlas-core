#!/bin/bash -e
export $(cat ./.env | grep -v ^# | xargs)
ng lint 'com.attlas.static.client' --format=prose --type-check=true
