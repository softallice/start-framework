#!/bin/bash
#
# 
#
# 
#
set -e

echo "Running $0"

dockerComposeFiles="-f docker-compose-oauth.yml"

# start oauth
(cd test/bdd/fixtures/demo ; (docker-compose $dockerComposeFiles down && docker-compose $dockerComposeFiles up --force-recreate))
