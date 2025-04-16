#!/bin/bash

# Usage: ./scripts/migrate.sh <migration-name>

if [ -z "$1" ]; then
  echo "❌ Please provide a migration name"
  exit 1
fi

echo "📦 Generating migration: $1"
npx sequelize-cli migration:generate --name "$1"

echo "🚀 Ready to edit the migration file in src/migrations/"