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
    }
  }, [tg]);
}

export function useTgData() {
  const tgData = useTG()
  const [tg, setTg] = useState(tdData);
  useEffect(() => {
    if (!tgData) return null;
    setTg({initData: tgData.initData,});
  }, [tgData]);
  return tg
}