import { useEffect } from "react";
import { useGetKey } from "./useGetKey";
import { UserApi } from "./api";

export function useLogin(tg) {
  const { value: token, loading } = useGetKey("access_token");

  useEffect(() => {
    if (loading) return;

    const doLogin = async () => {
      if (token) {
        // Есть токен → идём проверять на сервер
        console.log("Проверяем токен на сервере:", token);
        // await fetch("/api/verify", { headers: { Authorization: `Bearer ${token}` } })
      } else {
        // Токена нет → логинимся/регистрируемся
        const api = new UserApi();
        const res = await api.login(tg.initData);
        console.log("Результат логина:", res);
      }
    };

    doLogin();
  }, [loading, token, tg]);
}
