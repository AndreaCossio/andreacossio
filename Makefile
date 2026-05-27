# Load project env
ifneq (,$(wildcard .env))
    include .env
    export
endif

SERVICE_NAME = frontend
CONTAINER_NAME ?= $(PROJECT_NAME)-$(SERVICE_NAME)
IMAGE_NAME = $(REGISTRY)/$(CONTAINER_NAME):latest

# Phony targets to ensure make doesn't confuse them with files
.PHONY: help dev prod up up-build down restart logs shell clean

# Default target
.DEFAULT_GOAL := help

help: ## Show this help menu
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

dev: up ## Alias to start the dev environment

prod: ## Build the production image and push to registry
	docker build --target production -t $(IMAGE_NAME) .
	docker push $(IMAGE_NAME)

up: ## Start the dev environment in the background
	docker compose up -d

up-build: ## Force rebuild the image and start (use after changing package.json or Dockerfile)
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