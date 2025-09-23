#!/bin/sh
set -e

MSG=${1:-"Auto migration"}
echo "🚧 Генерация миграции с комментарием: $MSG"

alembic revision --autogenerate -m "$MSG"
echo "✅ Миграция сгенерирована."
