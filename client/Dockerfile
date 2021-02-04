# Copyright Softmagic. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0

FROM nginx:latest
LABEL client web

# COPY build/bin/client-web/spa /usr/share/nginx/www/
# COPY images/client-web/templates/ /etc/nginx/templates/

COPY dist/spa/ /usr/share/nginx/www/
COPY nginx.conf.template /etc/nginx/templates/

# COPY /opt/gopath/src/github.com/template/start-framework/build/bin/client-web/ /usr/share/nginx/www/
# COPY /opt/gopath/src/github.com/template/start-framework/images/client-web/templates/ /etc/nginx/templates/
