#!/bin/bash

export $(cat ./../../.env | grep -v ^# | xargs)
ng build
#ng build --prod --env=prod
