#!/usr/bin/env bash

### Параметры ###
# Локальный файл (жёстко прописан)
LOCAL_FILE="docker-compose.dev.yaml"

# Удалённый сервер
REMOTE_USER="root"
REMOTE_HOST="212.109.193.21"
REMOTE_DIR="/opt/keycraft"

# Путь до приватного SSH-ключа
SSH_KEY="C:/Users/Anton Kharchenko/.ssh/id_rsa"

# Проверяем, что локальный файл существует
if [ ! -f "$LOCAL_FILE" ]; then
  echo "❌ Локальный файл $LOCAL_FILE не найден."
  exit 1
fi

# Копируем файл через ssh + sudo tee
cat "$LOCAL_FILE" | \
ssh -i "$SSH_KEY" "${REMOTE_USER}@${REMOTE_HOST}" \
  "sudo tee ${REMOTE_DIR}/$(basename "$LOCAL_FILE") > /dev/null"

# Проверяем результат выполнения ssh/tee
if [ $? -eq 0 ]; then
  echo "✅ Файл успешно скопирован в ${REMOTE_DIR} на сервере ${REMOTE_HOST}"
else
  echo "❌ Ошибка при копировании файла"
  exit 2
fi
