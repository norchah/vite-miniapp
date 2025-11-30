import TheHeader from "./components/ui/layout/TheHeader.jsx";
import {useMiniAppInit} from "./hooks/useMiniAppInit.js";
import {useEffect, useState} from "react";
import {renderPage} from "./utils/renderPage.jsx";
import AdminPage from "./components/common/admin.jsx";
import TheFooter from "./components/ui/layout/bottomNav.jsx";
import {useMiniAppAuth} from "./hooks/useMiniAppAuth.js";
import {useTgData} from "./hooks/useTgData.js";


export default function App() {
  const [page, setPage] = useState('home');
  const {safeZoneTop, safeZoneBottom} = useMiniAppInit()
  const {user, error, loading} = useMiniAppAuth();
  const {avatar, setAvatar} = useState('')


  useEffect(() => {
    console.log('USEEEEER:::::::', user)
    if (user?.photoUrl) {
      setAvatar(user.photoUrl);      // если ты приводишь к camelCase на бэке
    }
    console.log(avatar)
  }, [user]);


  return (
    <div className={`bg-slate-800 text-white h-screen flex flex-col items-center m-auto`}
         style={{paddingTop: `${safeZoneTop}px`}}
    >
      <TheHeader/>

      {error && <p>{error}</p>}

      <p className='w-80'>{user && JSON.stringify(user, null, 2)}</p>
      <div className="flex-1 w-full">{renderPage(page)}</div>
      {/*{avatar.photo_url && <img src={avatar.photoUrl} className='w-[50px] h-[50px] ' alt='avatar'/>}*/}

      {user && user.id === 116627792 ? <AdminPage/> : null}
      <TheFooter setPage={setPage} currentPage={page} safeBottom={safeZoneBottom}/>
    </div>
  );
}





