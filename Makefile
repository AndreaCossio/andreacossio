# Load project env (same as docker compose)
ifneq (,$(wildcard .env))
    include .env
    export
endif

SERVICE_NAME = frontend
CONTAINER_NAME ?= $(PROJECT_NAME)-$(SERVICE_NAME)
NETWORK_NAME = global_dev_net
CREATE_NETWORK_CMD = docker network create $(NETWORK_NAME)

# Phony targets to ensure make doesn't confuse them with files
.PHONY: help network up up-build down restart logs shell clean

# Default target
.DEFAULT_GOAL := help

help: ## Show this help menu
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

network: ## Verify the global dev network exists
	@docker network inspect $(NETWORK_NAME) >/dev/null 2>&1 || \
		(echo "Network '$(NETWORK_NAME)' does not exist."; \
		 echo "Create it with: $(CREATE_NETWORK_CMD)"; \
		 exit 1)

up: network ## Start the dev environment in the background
	docker compose up -d

up-build: network ## Force rebuild the image and start (use after changing package.json or Dockerfile)
	docker compose up -d --build

down: ## Stop the dev environment
	docker compose down

restart: down up ## Restart the dev environment

logs: ## Tail the live logs of the frontend container
	docker compose logs -f $(SERVICE_NAME)

shell: ## Drop into the container shell (useful for running 'bun add <pkg>')
	docker exec -it $(CONTAINER_NAME) sh

clean: down ## Stop containers, remove orphaned volumes and networks
	docker compose down -v --remove-orphans
