#!/bin/bash
#
# Copyright Softmagic. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#
set -e

echo "Frame-work Vault Stop and Clean Start"

cd vault
echo "Stop and Clean Vault..."

./stop_clean_all.sh

echo "End Stop and Clean Vault..."


