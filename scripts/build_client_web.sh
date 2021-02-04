#!/bin/bash
#
# Copyright Softmagic Inc. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#
set -e

echo "Building client-web"

mkdir -p ./build/bin/wallet-web

cd cmd/wallet-web
npm install
npm run build

cp -R dist/* ../../build/bin/wallet-web
