#!/bin/bash

export $(cat ./../../.env | grep -v ^# | xargs)

./build.sh
mvn exec:java
