#!/bin/bash
#
# Copyright Softmagic. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#
set -e

echo "Generate SSL Key Create"

# cd /opt/workspace/softmagic

mkdir -p nginx/keys/tls

softmagicSSLConf=$(mktemp)
echo "subjectKeyIdentifier=hash
authorityKeyIdentifier = keyid,issuer
extendedKeyUsage = serverAuth
keyUsage = Digital Signature, Key Encipherment
subjectAltName = @alt_names
[alt_names]
DNS.1 = *.softmagic.local" >> "$softmagicSSLConf"

CERT_CA="nginx/keys/tls/softmagic-dev-ca.crt"

if [ ! -f "$CERT_CA" ]; then
    echo "Generating CA cert"
    openssl ecparam -name prime256v1 -genkey -noout -out nginx/keys/tls/softmagic-dev-ca.key
    openssl req -new -x509 -key nginx/keys/tls/softmagic-dev-ca.key -subj "/C=CA/ST=ON/O=Softmagic/OU=Softmagic Dev CA" -out nginx/keys/tls/softmagic-dev-ca.crt -days 1095
else
    echo "Skipping CA generation - already exists"
fi


#create TLS creds
openssl ecparam -name prime256v1 -genkey -noout -out nginx/keys/tls/softmagic.local.key
openssl req -new -key nginx/keys/tls/softmagic.local.key -subj "/C=CA/ST=ON/O=Softmagic/OU=Softmagic-sandbox/CN=softmagic.local" -out nginx/keys/tls/softmagic.local.csr
openssl x509 -req -in nginx/keys/tls/softmagic.local.csr -CA nginx/keys/tls/softmagic-dev-ca.crt -CAkey nginx/keys/tls/softmagic-dev-ca.key -CAcreateserial -extfile "$softmagicSSLConf" -out nginx/keys/tls/softmagic.local.crt -days 365
