import BottomNav from "./components/ui/layout/bottomNav.jsx";
import TheHeader from "./components/ui/layout/TheHeader.jsx";
import {useMiniAppInit} from "./hooks/useMiniAppInit.js";
import {useEffect, useState} from "react";
import {renderPage} from "./utils/renderPage.js";
import {UserApi} from "./api/userApi.js";
import {useTG} from "./hooks/useTG.js";
import AdminPage from "./components/common/admin.jsx";
import {layoutConfig} from "./configs/layoutConfig.js";


export default function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  const [safeTop, setSafeTop] = useState(layoutConfig.safeAreaTop);
  const [safeBottom, setSafeBottom] = useState(layoutConfig.safeAreaBottom);
  const {safe, safeTg} = useMiniAppInit()
  const tg = useTG()

  useEffect(() => {
    setSafeTop(safe.top)
    setSafeBottom(safe.bottom)
  }, [safe])




  const handleClick = async () => {
    const api = new UserApi();
    const res = await api.login(tg.initData)
    setUser(res);
  }


  return (
    <div className={`bg-slate-800 text-white h-screen flex flex-col items-center`}
         style={{paddingTop: `${safeTop}px`}}
    >
      <TheHeader/>
      <button onClick={handleClick} className='bg-sky-600 hover:cursor-pointer active:bg-sky-800 p-3 mb-2'>Жать и
        смотреь
      </button>
      {/*{AddToHomeButton()}*/}
      <p>{user && user.username}</p>

      <p>safe device top: {safe && safe.top} пикселей</p>
      <p>safe device bottom: {safe && safe.bottom} пикселей</p>
      <p>safe tg top: {safeTg && safeTg.top} px</p>
      <p>safe tg bottom: {safeTg && safeTg.bottom} px</p>
      <div className="flex-1 w-full">{renderPage(page)}</div>
      {user && user.tg_id === 116627792 ? <AdminPage/> : null}
      <BottomNav setPage={setPage} currentPage={page} bottom={safeBottom}/>
    </div>
  );
}




