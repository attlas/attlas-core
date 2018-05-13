#!/bin/bash

export $(cat ./../../.env | grep -v ^# | xargs)
npm run jasmine
