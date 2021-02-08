#!/bin/bash
#
# Copyright Softmagic. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#
set -e

echo "Frame-work Vault Stop"

cd vault
echo "Stop Vault..."

./stop.sh

echo "End Stop Vault..."


