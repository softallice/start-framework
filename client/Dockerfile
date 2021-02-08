# Copyright Softmagic. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0

FROM nginx:latest
LABEL client web

COPY dist/spa/ /usr/share/nginx/www/
COPY nginx.conf.template /etc/nginx/templates/
# COPY nginx.conf /etc/nginx/nginx.conf

