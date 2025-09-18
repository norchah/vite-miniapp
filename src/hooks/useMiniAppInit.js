import {useEffect} from 'react';

export default function useMiniAppInit(tg) {
  useEffect(() => {
    if (!tg) return null;
    if (tg.platform !== 'tdesktop') {
      tg.disableVerticalSwipes();
      tg.lockOrientation();
      tg.requestFullscreen();
    }

  }, [tg]);
}


// function isT