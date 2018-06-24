#!/bin/sh
envsubst < .env.template > .env
npm start
