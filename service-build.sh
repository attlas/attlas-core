#!/bin/bash

echo "[+] Building ..."

echo " | [+] Frontend ..."
pushd frontend
npm i
npm run build
popd
echo " | [-] Frontend ..."

echo " | [+] Backend ..."
rm -rf ./devops/php/dist
pushd backend
popd
cp -r ./frontend/dist ./devops/php
echo " | [-] Backend"

echo "[-] Building"
