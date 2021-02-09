#!/bin/bash
#
# Copyright Softmagic. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#
set -e

echo "Frame-work prod-mod Start"

# cd client
# echo "delete node_modules..."
# rm -rf node_modules

# cd ..

# echo "docker start..."
# docker-compose -f docker-compose-prod.yml down 

docker-compose -f docker-compose-prod.yml up --force-recreate

#docker-compose -f docker-compose.yml -f docker-compose-revers.yml up

