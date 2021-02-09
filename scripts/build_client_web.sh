#!/bin/bash
#
# Copyright Softmagic Inc. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#
set -e

echo "Building client-web"

# echo "build folder create"
# mkdir -p ./build/bin/client-web

cd client

echo "dist folder delete"
rm -rf dist

echo "node-module delete"
sudo rm -rf node_modules

echo "npm install & quasar build"
npm install
quasar build 

# bin file unuse
# cp -R dist/* ../build/bin/client-web
