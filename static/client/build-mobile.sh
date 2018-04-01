#!/bin/bash -e
export $(cat ./../../.env | grep -v ^# | xargs)
envsubst < src/environments/hosts.ts.template > src/environments/hosts.ts
ng build --prod --env=prod --base-href . --output-path ../../mobile/cordova/www/
sed -i -e 's|</app-root>|</app-root><script type="text/javascript" src="cordova.js"></script>|g' ../../mobile/cordova/www/index.html
