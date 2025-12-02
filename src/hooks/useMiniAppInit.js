// hooks/useMiniAppInit.js
import { useEffect, useState } from 'react';
import { useTgData } from "./useTgData.js";

export function useMiniAppInit() {
  const { tgData } = useTgData();
  const [safeZoneTop, setSafeZoneTop] = useState(null);
  const [safeZoneBottom, setSafeZoneBottom] = useState(null);

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

  return { safeZoneTop, safeZoneBottom, tgData };
}
