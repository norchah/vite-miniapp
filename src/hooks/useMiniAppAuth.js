import {useState, useEffect} from "react";
import {UserApi} from "../api/userApi";

export function useMiniAppAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function login() {
      try {
        const tg = window.Telegram?.WebApp;

        if (!tg?.initData || tg.initData.length === 0) {
          setError("No Telegram initData");
          setLoading(false);
          return;
        }

        const api = new UserApi();
        const response = await api.login(tg.initData);

        setUser(response);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    login();
  }, []); // ← ВАЖНО: один раз при загрузке MiniApp

  return {user, error, loading};
}
