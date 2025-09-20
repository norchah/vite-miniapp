import {useEffect, useState} from 'react';
import {useTG} from "./useTG.js";
import {tdData} from "../utils/const.js";
import {layoutConfig} from "../configs/layoutConfig.js";

export function useMiniAppInit() {
  const tg = useTG()

  useEffect(() => {
    if (!tg) return null;
    if (tg.platform !== 'tdesktop') {
      tg.disableVerticalSwipes();
      tg.lockOrientation();
      tg.requestFullscreen();

      // test

    }
    layoutConfig.safeAreaTop = tg.safeAreaInset.top
    layoutConfig.safeAreaBottom = tg.safeAreaInset.bottom

  }, [tg]);
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