import {useEffect, useState} from 'react';
import {useTG} from "./useTG.js";
import {tdData} from "../utils/const.js";

export function useMiniAppInit() {
  const tg = useTG()
  useEffect(() => {
    if (!tg) return null;
    if (tg.platform !== 'tdesktop') {
      tg.disableVerticalSwipes();
      tg.lockOrientation();
      tg.requestFullscreen();
      tg.MainButton.text = "Оплатить";
      tg.MainButton.color = "#1C2A44";
      tg.MainButton.onClick(() => {
        console.log("Нажали кнопку Telegram");
      });

// Показать кнопку
      tg.MainButton.show();
    }

  }, [tg]);
}

export function useMiniApp() {
  const tgData = useTG()
  const [tg, setTg] = useState(tdData);
  useEffect(() => {
    if (!tgData) return null;
    setTg({initData: tgData.initData,});
  }, [tgData]);
  return tg
}