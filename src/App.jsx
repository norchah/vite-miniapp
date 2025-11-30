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
  const [avatar, setAvatar] = useState('')


  useEffect(() => {
    if (user?.photoUrl) {
      setAvatar(user.photoUrl);
    }
  }, [user]);


  return (
    <div className={`bg-slate-800 text-white h-screen flex flex-col items-center m-auto`}
         style={{paddingTop: `${safeZoneTop}px`}}
    >
      <TheHeader/>

      {error && <p>{error}</p>}
      {avatar && <img src={avatar} alt="avatar" className="w-[50px] h-[50px] rounded-full"/>}

      <div className="flex-1 w-full">{renderPage(page)}</div>
      {user && user.id === 116627792 ? <AdminPage/> : null}
      <TheFooter setPage={setPage} currentPage={page} safeBottom={safeZoneBottom}/>
    </div>
  );
}





