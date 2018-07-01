#!/bin/bash -e
export $(cat ./.env | grep -v ^# | xargs)
export COMPONENT_PARAM_HOST=$(ifconfig eth0 | grep 'inet addr' | cut -d: -f2 | awk '{print $1}')
export COMPONENT_PARAM_AUTH_HOST=${COMPONENT_PARAM_HOST}
envsubst < src/environments/consts.ts.template > src/environments/consts.ts
ng build --prod --configuration=production --base-href . --output-path ../../mobile/cordova/www/
sed -i -e "s|</app-root>|$(cat ./cordova.patch)|g" ../../mobile/cordova/www/index.html
