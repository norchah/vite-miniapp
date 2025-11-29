import TheHeader from "./components/ui/layout/TheHeader.jsx";
import {useMiniAppInit} from "./hooks/useMiniAppInit.js";
import {useEffect, useState} from "react";
import {renderPage} from "./utils/renderPage.jsx";
import AdminPage from "./components/common/admin.jsx";
import TheFooter from "./components/ui/layout/bottomNav.jsx";
import {useMiniAppAuth} from "./hooks/useMiniAppAuth.js";
import AddToHomeButton from "./components/ui/toHomeButton.jsx";


export default function App() {
  const [page, setPage] = useState('home');
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  const {safeZoneTop, safeZoneBottom} = useMiniAppInit()
  const {user, error, loading} = useMiniAppAuth();


  // useEffect(() => {
  //   if (!safeZone) return;
  //   setTop(safeZone.top);
  //   setBottom(safeZone.bottom);
  // }, [safeZone]);


  return (
    <div className={`bg-slate-800 text-white h-screen flex flex-col items-center m-auto`}
         style={{paddingTop: `${safeZoneTop}px`}}
    >
      <TheHeader/>

      {error && <p>{error}</p>}
      <AddToHomeButton/>
      <p className='w-80'>{user && JSON.stringify(user, null, 2)}</p>
      <div className="flex-1 w-full">{renderPage(page)}</div>
      {user && user.id === 116627792 ? <AdminPage/> : null}
      <TheFooter setPage={setPage} currentPage={page} safeBottom={safeZoneBottom}/>
    </div>
  );
}





