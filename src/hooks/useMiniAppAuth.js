import {useState, useEffect} from "react";
import {UserApi} from "../api/userApi.js";


export function useMiniAppAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function login() {
      try {
        const tg = window.Telegram?.WebApp;
        if (tg?.initData || tg.initData.length === 0) {
          setError('No Telegram initData');
          setLoading(false);
          return
        }
        const api = new UserApi()
        const response = await api.login(tg.initData)

        setUser(response)
        setError(null)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false);
      }
    }

    login()

  }, [])

  return {user, error, loading};
}