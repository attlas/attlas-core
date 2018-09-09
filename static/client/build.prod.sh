#!/bin/bash -e
. ./.env.sh
npm i
envsubst < src/environments/environment.prod.ts.template > src/environments/environment.prod.ts
ng build --configuration=production
