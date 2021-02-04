# Namespace for the images
DOCKER_OUTPUT_NS         ?= ghcr.io
REPO_IMAGE_NAME          ?= softmagic

.PHONY: client-web
client-web:
	@scripts/build_client_web.sh

.PHONY: client-web-docker
client-web-docker: client-web
	@echo "Building client-web docker image"
	@docker build -f ./images/client-web/Dockerfile --no-cache -t $(DOCKER_OUTPUT_NS)/$(REPO_IMAGE_NAME)/client-web:latest .


# starting frame-work in dev mode for hot deployment
.PHONY: framework-dev-start
framework-dev-start:
	@scripts/framework-dev-start.sh

# starting frame-work in dev mode for hot deployment
.PHONY: framework-prod-start
framework-prod-start:
	@scripts/framework-prod-start.sh

# .PHONY: wallet-web-start
# wallet-web-start: clean wallet-web-docker wallet-server-docker generate-test-config generate-test-keys mock-images
# 	@scripts/wallet_web_start.sh