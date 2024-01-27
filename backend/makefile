.PHONY: start migrate

help:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {sub("\\\\n",sprintf("\n%22c"," "), $$2);printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

dev: ## Start the server
	@go run $(FLAGS) ./cmd/main.go

start: ## Start the server
	@docker-compose up -d

migrate:
	@docker-compose exec postgres psql -U postgres -d walletdb -a -f ./init_wallet.sql
