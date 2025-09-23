import hashlib
import hmac
import json
import urllib.parse

from fastapi import HTTPException


def validate_init_data(init_data: str, bot_token: str) -> dict:
    """
    Проверка подписи initData от Telegram Mini App
    Возвращает словарь user, если подпись валидна
    """

    # парсим строку init_data
    parsed_data = urllib.parse.parse_qs(init_data, strict_parsing=True)

    # извлекаем hash
    hash_from_telegram = parsed_data.get("hash", [None])[0]
    if not hash_from_telegram:
        raise HTTPException(status_code=400, detail="Missing hash in initData")

    # убираем hash из данных
    parsed_data.pop("hash", None)

    # собираем data_check_string (ключ=значение, отсортировано по ключам, \n между парами)
    data_check_string = "\n".join(
        f"{key}={value[0]}" for key, value in sorted(parsed_data.items())
    )

    # считаем secret_key = HMAC_SHA256("WebAppData", bot_token)
    secret_key = hmac.new(
        key=b"WebAppData",
        msg=bot_token.encode(),
        digestmod=hashlib.sha256
    ).digest()

    # считаем check_hash
    check_hash = hmac.new(
        key=secret_key,
        msg=data_check_string.encode(),
        digestmod=hashlib.sha256
    ).hexdigest()

    if check_hash != hash_from_telegram:
        raise HTTPException(status_code=403, detail="Invalid initData")

    # достаем user (он в JSON внутри строки)
    user_json = parsed_data.get("user", [None])[0]
    user = json.loads(user_json) if user_json else {}

    return user
