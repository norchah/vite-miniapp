import {useEffect} from 'react';

export default function useMiniAppInit(tg) {
  useEffect(() => {
    if (!tg) return null;

  }, [tg]);
}


// function isT