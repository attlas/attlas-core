#!/bin/bash -e

envsubst > .env < .env.template
envsubst > sonar-project.properties < sonar-project.properties.template
