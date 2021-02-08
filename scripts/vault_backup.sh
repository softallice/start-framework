#!/bin/bash
#
# Copyright Softmagic. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#
set -e

echo "Frame-work Vault Backup"

cd vault
echo "Backup Vault..."

./backup.sh

echo "End Backup Vault..."


