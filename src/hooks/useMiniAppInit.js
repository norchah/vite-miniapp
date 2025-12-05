// hooks/useMiniAppInit.js
import {useEffect, useState} from 'react';


export function useMiniAppInit(tgData) {
  const [safeTop, setSafeZoneTop] = useState(null);
  const [safeBottom, setSafeZoneBottom] = useState(null);


  useEffect(() => {
    if (!tgData) return;

    // Настройки WebApp
    if (tgData.platform !== 'tdesktop') {
      tgData.disableVerticalSwipes?.();
      tgData.lockOrientation?.();
      tgData.requestFullscreen?.();
    }

    // Устанавливаем safe area
    setSafeZoneTop(tgData.safeAreaInset?.top ?? 0);
    setSafeZoneBottom(tgData.safeAreaInset?.bottom ?? 0);

    // Говорим Telegram, что приложение готово
    tgData.ready?.();
  }, [tgData]);

  return {safeTop, safeBottom};
}
