#!/bin/bash -e
export $(cat ./../../.env | grep -v ^# | xargs)
mvn clean install
