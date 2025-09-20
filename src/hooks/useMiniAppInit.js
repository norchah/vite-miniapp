import {useEffect, useState} from 'react';
import {useTG} from "./useTG.js";
import {tdData} from "../utils/const.js";

export function useMiniAppInit() {
  const [safe, setSafe] = useState(0);
  const tg = useTG()

  useEffect(() => {
    if (!tg) return null;
    if (tg.platform !== 'tdesktop') {
      tg.disableVerticalSwipes();
      tg.lockOrientation();
      tg.requestFullscreen();
      setSafe({
        top: tg.safeAreaInset.top,
        bottom: tg.safeAreaInset.bottom,
      })
      // test

    }

  }, [tg]);
  return safe
}


export function useTgUnsafeData() {
  const tgData = useTG()
  const [tg, setTg] = useState(tdData);

  useEffect(() => {
    if (!tgData) return null;
    setTg({
      tg: JSON.stringify(tgData, null, 2),
      initDataUnsafe: tgData.initDataUnsafe,
    });
  }, [tgData]);
  return tg
}