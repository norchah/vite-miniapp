import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from app.db import engine, Base
from app.routes import auth_router
from app.utils.origins_list_CORS import origins

logger = logging.getLogger(__name__)

# Создаем приложение FastApi
app = FastAPI(title="Пользователи", root_path="/users")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["set-cookie"],
)


class Item(BaseModel):
    init_data: str


app.include_router(auth_router)


@app.on_event("startup")
async def on_startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
