#!/bin/bash

DB_NAME="users"
DB_USER="postgres"

echo "Dropping and recreating database '$DB_NAME'..."

# Drop the database
dropdb -U $DB_USER $DB_NAME

# Recreate the database
createdb -U $DB_USER $DB_NAME

# Run migrations
npx sequelize-cli db:migrate

echo "Database reset complete! ✅"
