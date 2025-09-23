import logging

from app.crud.crud import crud_login
from app.crud.dao import dao_get_users
from app.db import get_db
from app.schemas import UserResponse, UserInitData
from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession

logger = logging.getLogger(__name__)

auth_router = APIRouter()


@auth_router.post('/login', response_model=UserResponse, status_code=status.HTTP_200_OK)
async def login(user: UserInitData, db: AsyncSession = Depends(get_db)):
    logged_user = await crud_login(db, user)
    logger.warning(f'!!!!!! logged_user: {logged_user}')
    return logged_user


@auth_router.get('/all', response_model=list[UserResponse], status_code=status.HTTP_200_OK)
async def get_all(db: AsyncSession = Depends(get_db)):
    return await dao_get_users(db)
