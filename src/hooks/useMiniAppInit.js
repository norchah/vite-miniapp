import {useEffect, useState} from 'react';

export default function useMiniAppInit(tg) {
  const [viewport, setViewport] = useState(0);
  useEffect(() => {
    if (!tg) return null;
    if (tg.platform !== 'tdesktop') {
      tg.disableVerticalSwipes();
      tg.lockOrientation();
      tg.requestFullscreen();
      setViewport(tg.viewportHeight);
    }

  }, [tg]);
  return {viewport}
}


// function isT