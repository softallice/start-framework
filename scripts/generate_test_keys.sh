#!/bin/sh
#
# Copyright Softmagic. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#

set -e


echo "Generating softmagic Test PKI"

cd /opt/workspace/softmagic
mkdir -p nginx/keys/tls

tmp=$(mktemp)
echo "subjectKeyIdentifier=hash
authorityKeyIdentifier = keyid,issuer
extendedKeyUsage = serverAuth
keyUsage = Digital Signature, Key Encipherment
subjectAltName = @alt_names
[alt_names]
DNS.1 = localhost
DNS.2 = *.softmagic.local
DNS.3 = client.softmagic.local
DNS.4 = server.softmagic.local" >> "$tmp"

CERT_CA="nginx/keys/tls/softmagic-dev-ca.crt"
if [ ! -f "$CERT_CA" ]; then
#create CA
openssl ecparam -name prime256v1 -genkey -noout -out nginx/keys/tls/softmagic-dev-ca.key
openssl req -new -x509 -key nginx/keys/tls/softmagic-dev-ca.key -subj "/C=CA/ST=ON/O=Example Internet CA Inc.:CA Sec/OU=CA Sec" -out $CERT_CA -days 1095
else
    echo "Skipping CA generation - already exists"
fi

#create TLS creds
openssl ecparam -name prime256v1 -genkey -noout -out nginx/keys/tls/softmagic.local.key
openssl req -new -key nginx/keys/tls/softmagic.local.key -subj "/C=CA/ST=ON/O=Example Inc.:softmagic/OU=softmagic/CN=localhost" -out nginx/keys/tls/ec-key.csr
openssl x509 -req -in nginx/keys/tls/ec-key.csr -CA nginx/keys/tls/softmagic-dev-ca.crt -CAkey nginx/keys/tls/softmagic-dev-ca.key -CAcreateserial -extfile "$tmp" -out nginx/keys/tls/softmagic.local.crt -days 365

echo "done generating softmagic PKI"


