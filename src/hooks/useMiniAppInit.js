import {useEffect, useState} from 'react';
import {useTG} from "./useTG.js";

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

export function useMiniApp() {
  const tg = useTG()
  const [viewport, setViewport] = useState(0);
  useEffect(() => {
    if (!tg) return null;
    setViewport(tg.viewportHeight);
  }, [tg]);
  return {viewport}
}