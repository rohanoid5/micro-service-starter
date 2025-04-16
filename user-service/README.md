# User Service

## Docker setup

- docker-compose down -v
- docker logout
- docker login
- docker-compose up --build

## Local setup

### Dev

- npm run local:dev

### Build

- npm run build && npm run start

## DB Migration

### Update Table

- Update the model in `src/models/`
- Add the field in Attributes, Class and Init.
- run `npm run migration:create <migration-name>`
- run `npm run db:update` and `docker-compose exec app ./scripts/db-update.sh` for docker
- run `npm run migrate:undo` to undo the changes.
