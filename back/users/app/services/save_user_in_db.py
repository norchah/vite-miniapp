from app.crud.dao import dao_save_user
from app.schemas import UserCreate
from sqlalchemy.ext.asyncio import AsyncSession


async def service_save_user(db: AsyncSession, user: UserCreate):
    user_data = {
        'tg_id': user.tg_id,
        'username': user.username,
        'first_name': user.first_name,
        'last_name': user.last_name,
        #   'photo_url': validated_user.photo_url,  # TODO потом добавить фото через миграции
    }
    return await dao_save_user(db, UserCreate(**user_data))
