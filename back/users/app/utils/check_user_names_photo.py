from app.crud.dao import dao_update_names_or_photo
from sqlalchemy.ext.asyncio import AsyncSession


async def check_user_names_photo(db: AsyncSession, new_user, exist_user):
    kwargs = {}
    if new_user.username != exist_user.username:
        kwargs['new_username'] = new_user.username
    if new_user.first_name != exist_user.first_name:
        kwargs['new_first_name'] = new_user.first_name
    if new_user.last_name != exist_user.last_name:
        kwargs['new_last_name'] = new_user.last_name
    # if new_user.photo_url != exist_user.photo_url:
        # kwargs['new_photo'] = new_user.photo_url

    if kwargs:
        updated_user = await dao_update_names_or_photo(db, new_user.id, **kwargs)
        return updated_user
    return exist_user
