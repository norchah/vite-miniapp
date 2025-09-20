import {useState, useEffect} from "react";
import {useTG} from "./useTG.js";

export function useGetKey(keyName) {
  const tg = useTG();
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tg.SecureStorage.getItem(keyName, (err, result) => {
      if (err) {
        console.error("Ошибка при получении ключа:", err);
        setValue(null);
      } else if (result) {
        setValue(result); // нашли токен
      } else {
        setValue(null); // ключа нет
      }
      setLoading(false);
    });
  }, [tg, keyName]);

  return {value, loading};
}
