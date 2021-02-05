#!/bin/bash
#
# Copyright Softmagic. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#
set -e

echo "Build back-end API server Docker image Start"

cd server

docker build -f Dockerfile --no-cache -t softmagic/api-server:latest .

echo "Build back-end API server Docker image End"
