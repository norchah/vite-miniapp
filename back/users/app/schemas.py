from pydantic import BaseModel


class UserCreate(BaseModel):
    tg_id: int
    username: str
    first_name: str | None = None
    last_name: str | None = None
    # photo_url: str  # TODO потом добавить фото через миграции


class UserInitData(BaseModel):
    init_data: str


class UserResponse(BaseModel):
    id: int
    tg_id: int
    username: str
    first_name: str | None = None
    last_name: str | None = None
