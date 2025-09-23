#!/usr/bin/env bash
set -e

echo "🛠️  Инициализация баз данных..."

# Список баз, которые нужно гарантированно создать
DATABASES=("users_db" "referrals_db" "payments_db" "keys_db" "servers_db")

for DB in "${DATABASES[@]}"; do
  echo "📦  Проверяем базу «${DB}»"
  if psql -U "$POSTGRES_USER" -d postgres -tAc "SELECT 1 FROM pg_database WHERE datname='${DB}'" | grep -q 1; then
    echo "  ℹ️  «${DB}» уже существует"
  else
    echo "  ➕  Создаём базу «${DB}»"
    createdb -U "$POSTGRES_USER" "$DB"
  fi
done

echo "✅  Инициализация всех баз завершена."
