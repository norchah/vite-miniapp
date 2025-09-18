import {useEffect, useState} from "react";
import {mockData} from "../utils/const";

export function useTG() {
  const [tg, setTg] = useState(mockData); // сразу моковые данные
  const [source, setSource] = useState("mock"); // откуда данные

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tgWebApp = window.Telegram.WebApp;

      // Если есть реальные данные — подставляем их
      if (tgWebApp.initDataUnsafe && Object.keys(tgWebApp.initDataUnsafe).length) {
        setTg(tgWebApp);
        setSource("real");
      }
    }
  }, []);

  return {...tg, source}; // возвращаем все поля + source
}
