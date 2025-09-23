import logging

from app.configs.secrets import secrets
from app.crud.dao import dao_get_user_or_already_exist
from app.schemas import UserCreate
from app.utils.check_user_names_photo import check_user_names_photo
from app.utils.validate_tg_data import validate_init_data
from fastapi import status, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.services.save_user_in_db import service_save_user

logger = logging.getLogger(__name__)


async def crud_login(db: AsyncSession, user: UserCreate):
    validated_user_dict = validate_init_data(user.init_data, bot_token=secrets.BOT_TOKEN)
    if not validated_user_dict:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Incorrect hash')

    validated_user_dict['tg_id'] = validated_user_dict.pop('id')
    validated_user = UserCreate(**validated_user_dict)

    logger.warning(f'!@@@@@@@@@@@@@@@@@@@@@@@ validated_user: {validated_user}')
    exist_user = await dao_get_user_or_already_exist(db, validated_user.tg_id)
    if exist_user:
        user_in_db = await check_user_names_photo(db, validated_user, exist_user)
        return user_in_db
    else:
        new_user = await service_save_user(db, validated_user)
        return new_user
