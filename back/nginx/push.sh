#!/bin/bash
echo "билдим..."
docker build -t norchah/nginx_kc-dev:latest .
echo "Пушу в хаб..."
docker push norchah/nginx_kc-dev:latest

echo "Образ успешно собран и загружен в Docker Hub как norchah/nginx_kc-dev:latest"