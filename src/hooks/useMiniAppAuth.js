import {useState, useEffect} from "react";
import {UserApi} from "../api/userApi";
import {useTgData} from "./useTgData.js";

export function useMiniAppAuth() {
  const {tgData} = useTgData()
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function login() {
      try {
        // ждем пока tgData загрузится
        if (!tgData) return;

        if (!tgData?.initData || tgData.initData.length === 0) {
          setError("No Telegram initData");
          setLoading(false);
          return;
        }

        const api = new UserApi();
        const response = await api.login(tgData.initData);

        setUser(response);
        setError(null);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    login();
  }, [tgData]);

  return {user, error, loading};
}
