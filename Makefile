############################################################################
# Client Web(quasar) 
# 1. Quasar build
# 2. Make Docker
############################################################################
# build quasar 
.PHONY: client-web
client-web:
	@scripts/build_client_web.sh

# Build client-web Dockerize
.PHONY: client-web-docker
client-web-docker: client-web
	@echo "Building client-web docker image"
	@scripts/client_web_docker.sh

############################################################################
# Backend Server(feathers.js) 
# 1. Make Docker
############################################################################

# Build Server Dockerize
.PHONY: api-server-docker
api-server-docker:
	@echo "Building backend server docker image"
	@scripts/api_server.sh

############################################################################
# HashCorp Vault & Consul
# 1. start
# 2. stop
# 3. backup
# 4. clean
############################################################################
# starting vault server
.PHONY: vault-start
vault-start:
	@scripts/vault_start.sh

# stop vault server
.PHONY: vault-stop
vault-stop:
	@scripts/vault_stop.sh

# backup vault server
.PHONY: vault-backup
vault-backup:
	@scripts/vault_backup.sh

# clean vault server
.PHONY: vault-clean
vault-clean:
	@scripts/vault_stop_clean_all.sh

############################################################################
# Dev Mod & Operation Mod
# 1. dev mod
# 2. prod mod
############################################################################
# starting frame-work in dev mode for hot deployment
.PHONY: framework-dev-start
framework-dev-start:
	@echo "Dev Start"
	@scripts/framework_dev_start.sh

# starting frame-work in dev mode for hot deployment
.PHONY: framework-dev-start-new
framework-dev-start-new:
	@echo "Delete node_module and Dev Start"
	@DEV_MOD=NEW
	@scripts/framework_dev_start.sh

# starting frame-work in dev mode for hot deployment
.PHONY: framework-prod-start
framework-prod-start:
	@scripts/framework_prod_start.sh





