#!/bin/bash

echo "🔁 Running migrations..."
npx sequelize-cli db:migrate --debug

echo "✅ Migrations applied!"
