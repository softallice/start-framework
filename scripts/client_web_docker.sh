#!/bin/bash
#
# Copyright Softmagic. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#
set -e

echo "Build client Docker image Start"

cd client

docker build -f Dockerfile --no-cache -t softmagic/client-web:latest .

echo "Build client Docker image End"
