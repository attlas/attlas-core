#!/bin/bash -e
export CLIENT_HOSTNAME=0.0.0.0
export CLIENT_PORT=80
export CLIENT_PORTS=443
docker build --build-arg CLIENT_HOSTNAME=$CLIENT_HOSTNAME \
             --build-arg CLIENT_PORT=$CLIENT_PORT \
             --build-arg CLIENT_PORTS=$CLIENT_PORTS \
             -t tln-angular:latest .
docker run -d --rm -p $CLIENT_PORT:$CLIENT_PORT -p $CLIENT_PORTS:$CLIENT_PORTS --name tln-angular tln-angular:latest
