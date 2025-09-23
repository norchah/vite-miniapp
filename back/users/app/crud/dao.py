from fastapi import HTTPException, status
from sqlalchemy import select, delete
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio import AsyncSession

from app.models import User
from app.schemas import UserCreate


async def dao_get_user_or_404(db: AsyncSession, tg_id: int) -> User | None:
    """Возвращает пользователя или кидает 404"""
    user = await dao_get_user_or_already_exist(db, tg_id)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"User with tg_id={tg_id} not found"
        )
    return user


async def dao_get_user_or_already_exist(db: AsyncSession, tg_id: int) -> User | None:
    """Проверяет, существует ли пользователь (для save)"""
    result = await db.execute(select(User).where(User.tg_id == tg_id))
    return result.scalar_one_or_none()


async def dao_get_users(db: AsyncSession):
    result = await db.execute(select(User))
    return result.scalars().all()


async def dao_save_user(db: AsyncSession, user_data: UserCreate):
    existing_user = await dao_get_user_or_already_exist(db, user_data.tg_id)
    if existing_user:
        return existing_user  # или кинуть 409 Conflict
    user = User(**user_data.dict())
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return user


async def dao_delete_user(db: AsyncSession, tg_id: int):
    try:
        result = await db.execute(delete(User).where(User.tg_id == tg_id).returning(User.tg_id))
        deleted_id = result.scalar_one_or_none()
        await db.commit()
        return deleted_id
    except SQLAlchemyError:
        await db.rollback()
        raise


async def dao_update_names_or_photo(
        db: AsyncSession,
        tg_id: int,
        new_username: str | None = None,
        new_first_name: str | None = None,
        new_last_name: str | None = None,
        new_photo_url: str | None = None,
):
    """Обновляет, то что пользователь может обновить, в зависимости от того что передано"""
    user = await dao_get_user_or_404(db, tg_id)
    if new_username is not None:
        user.username = new_username
    if new_first_name:
        user.first_name = new_first_name
    if new_last_name:
        user.last_name = new_last_name
    if new_photo_url:
        user.photo_url = new_photo_url
    await db.commit()
    await db.refresh(user)
    return user
