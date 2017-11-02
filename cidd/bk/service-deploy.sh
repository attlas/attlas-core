#!/bin/bash

echo "[+] Deploying ..."

echo " | [+] Waiting for service to start ..."
sleep 10
echo " | [-] Waiting for service to start"

echo " | [+] Commit image ..."
./service-halt.sh
./service-stop.sh
./service-commit.sh
echo " | [-] Commit image"

echo " | [+] Showdown service ..."
./service-down.sh
echo " | [-] Showdown service"


echo " | [+] Up committed images ..."
./service-run.sh
echo " | [-] Up committed images"

echo "[-] Deploying"
