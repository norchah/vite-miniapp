import logging.config
import os
import sys

# Добавляем путь к корню проекта (где лежит папка app)
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from alembic import context
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy import engine_from_config
from sqlalchemy import pool

from app.db import Base
from app.configs.secrets import secrets

# Загружаем переменные из .env файла
load_dotenv()

# Получаем конфигурацию Alembic
config = context.config

logger = logging.getLogger('alembic')

# Формируем строку подключения из переменных окружения
# SQLALCHEMY_DATABASE_URL = secrets.DATABASE_URL
SQLALCHEMY_DATABASE_URL = secrets.DATABASE_URL.replace("asyncpg", "psycopg2")

if not SQLALCHEMY_DATABASE_URL:
    # Формируем строку подключения, если DATABASE_URL не задан
    postgres_user = secrets.POSTGRES_USER
    postgres_password = secrets.POSTGRES_PASSWORD
    postgres_db_host = secrets.POSTGRES_DB_HOST
    postgres_port = secrets.POSTGRES_PORT
    postgres_db = secrets.DB_NAME

    # Проверка на обязательные переменные окружения
    if not all([postgres_user, postgres_password, postgres_db_host, postgres_port, postgres_db]):
        raise ValueError("Необходимо задать все переменные окружения для базы данных")

    SQLALCHEMY_DATABASE_URL = f"postgresql+psycopg2://{postgres_user}:{postgres_password}@" \
                              f"{postgres_db_host}:{postgres_port}/{postgres_db}"

# Логирование
logger = logging.getLogger('alembic')
logger.setLevel(logging.INFO)

# Подключение к базе данных
engine = create_engine(SQLALCHEMY_DATABASE_URL)
connection = engine.connect()
connection.close()
print("Connection to the database is successful!")

# Модифицируем строку подключения в конфигурации Alembic
config.set_main_option('sqlalchemy.url', SQLALCHEMY_DATABASE_URL)

# Здесь должен быть объект MetaData из вашего приложения
target_metadata = Base.metadata  # Добавьте это, если используете Base


def run_migrations_offline() -> None:
    """Run migrations in 'offline' mode."""
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    """Run migrations in 'online' mode."""
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection, target_metadata=target_metadata
        )

        with context.begin_transaction():
            context.run_migrations()


# Запуск миграций в зависимости от режима
if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
