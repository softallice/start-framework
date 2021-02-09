#!/bin/sh
#
# Copyright Softmagic. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#

SANDBOX_HOME=~/.softmagic-local/sandbox/

mkdir -p ${SANDBOX_HOME}/certs
cp nginx/keys/tls/softmagic-dev-ca.* ${SANDBOX_HOME}/certs

# copy these entries into /etc/hosts file
cat > ${SANDBOX_HOME}/hosts <<EOF
127.0.0.1 client.softmagic.local
127.0.0.1 server.softmagic.local
EOF
