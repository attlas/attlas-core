#!/bin/bash

rm -rf ./devops/php/dist
rm -rf ./frontend/dist

mkdir ./frontend/dist
cp -r ./frontend/src/* ./frontend/dist

cp -r ./frontend/dist ./devops/php
