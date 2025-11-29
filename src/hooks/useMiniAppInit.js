import {useEffect, useState} from 'react';
import {useTgData} from "./useTgData.js";


export function useMiniAppInit() {
  const [safeZoneTop, setSafeZoneTop] = useState(0);
  const [safeZoneBottom, setSafeZoneBottom] = useState(0);
  const {tgData} = useTgData()

  useEffect(() => {
      if (!tgData) return;
      if (tgData.platform !== 'tdesktop') {
        tgData.disableVerticalSwipes();
        tgData.lockOrientation();
        tgData.requestFullscreen();
        setSafeZoneTop(tgData.safeAreaInset.top)
        setSafeZoneBottom(tgData.safeAreaInset.bottom)

        // test
        tgData.ready()
      }

    }, [tgData]
  );

  return {safeZoneTop, safeZoneBottom}
}
