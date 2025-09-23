import {useEffect, useState} from 'react';
import {useTG} from "./useTG.js";
import {tdData} from "../utils/const.js";

export function useMiniAppInit() {
  const [safeZone, setSafeZone] = useState(0);
  const tg = useTG()

  useEffect(() => {
    if (!tg) return null;
    if (tg.platform !== 'tdesktop') {
      tg.disableVerticalSwipes();
      tg.lockOrientation();
      tg.requestFullscreen();
      setSafeZone({
        top: tg.safeAreaInset.top,
        bottom: tg.safeAreaInset.bottom,
      })
      // test
      tg.ready()
    }

  }, [tg]);
  return safeZone
}


export function useTgData() {
  const tgData = useTG()
  const [tg, setTg] = useState(tdData);

  useEffect(() => {
    if (!tgData) return null;
    setTg({
      tg: JSON.stringify(tgData, null, 2),
      initDataUnsafe: tgData.initDataUnsafe,
      initData: tgData.initData,
    });
  }, [tgData]);
  return tg
}