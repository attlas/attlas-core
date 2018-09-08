#!/bin/bash -e
. ./.env.sh
npm i
ng build --configuration=production
