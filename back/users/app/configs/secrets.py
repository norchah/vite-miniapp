from pydantic_settings import BaseSettings


class Secrets(BaseSettings):
    # Postgres
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB_HOST: str
    POSTGRES_PORT: int
    DB_NAME: str = 'users_db'

    # Telegram
    BOT_TOKEN: str

    @property
    def DATABASE_URL(self) -> str:
        """
        Составляем URL подключения к БД из отдельных переменных.
        """
        return (
            f"postgresql+asyncpg://"
            f"{self.POSTGRES_USER}:"
            f"{self.POSTGRES_PASSWORD}@"
            f"{self.POSTGRES_DB_HOST}:"
            f"{self.POSTGRES_PORT}/{self.DB_NAME}"
        )

    class Config:
        env_file = '.env'
        env_file_encoding = 'utf-8'


secrets = Secrets()
