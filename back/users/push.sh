#!/bin/bash
echo "билдим..."
docker build -t norchah/users-kc-dev:latest .
echo "Пушу в хаб..."
docker push norchah/users-kc-dev:latest

echo "Образ успешно собран и загружен в Docker Hub как norchah/users-kc-dev:latest"