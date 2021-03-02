#!/bin/bash
#
# 
#
# 
#

echo "Running $0"

dockerComposeFiles="-f docker-compose-oauth.yml"
(cd test/bdd/fixtures/demo && docker-compose $dockerComposeFiles down)

echo ""
echo "oauth stopped!"
