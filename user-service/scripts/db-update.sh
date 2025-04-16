#!/bin/bash

echo "🔁 Running migrations..."
npx sequelize-cli db:migrate

echo "✅ Migrations applied!"
