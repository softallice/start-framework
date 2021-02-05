#!/bin/bash
#
# Copyright Softmagic. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#
set -e

echo "Frame-work dev-mod Start"

if [$DEV_MOD == 'NEW'] ; then
    cd client
    echo "delete node_modules..."
    sudo rm -rf node_modules
    cd ..
fi

echo "docker start..."
docker-compose -f docker-compose-dev.yml down 

docker-compose -f docker-compose-dev.yml up --force-recreate

