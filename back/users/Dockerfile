# Используем официальный Python
FROM python:3.11-slim

# Рабочая директория
WORKDIR /app

# Копируем зависимости
COPY requirements.txt .

# Устанавливаем зависимости
RUN pip install --no-cache-dir -r requirements.txt

# Копируем код
COPY . .

# Копируем и делаем исполняемыми скрипты для миграций
COPY ./make_migrate.sh .
COPY ./migrate.sh .

RUN chmod +x /app/make_migrate.sh /app/migrate.sh

# Экспонируем порт
EXPOSE 8000

# Команда запуска
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
