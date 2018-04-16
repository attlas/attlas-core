#!/bin/bash -e
export $(cat ./../../.env | grep -v ^# | xargs)
envsubst < sonar-project.properties.template > sonar-project.properties
#~/projects/sonar-scanner-3.0.3.778/bin/sonar-scanner -X
sonar-scanner
