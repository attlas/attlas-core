#!/bin/bash

docker build -t test --build-arg SERVICE_ARTIFACT=service-17.11.0-SNAPSHOT-jar-with-dependencies.jar .