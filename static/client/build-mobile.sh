#!/bin/bash -e
export $(cat ./.env | grep -v ^# | xargs)
export PROJECT_PARAM_HOST=$(ipconfig getifaddr en0)
export PROJECT_PARAM_AUTH_HOST=$(ipconfig getifaddr en0)
envsubst < src/environments/consts.ts.template > src/environments/consts.ts
ng build --prod --env=prod --base-href . --output-path ../../mobile/cordova/www/
sed -i -e "s|</app-root>|$(cat ./cordova.patch)|g" ../../mobile/cordova/www/index.html
