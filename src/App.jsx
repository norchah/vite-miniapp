import TheHeader from "./components/ui/layout/TheHeader.jsx";
import {useMiniAppInit} from "./hooks/useMiniAppInit.js";
import {useEffect, useState} from "react";
import {renderPage} from "./utils/renderPage.js";
import {UserApi} from "./api/userApi.js";
import {useTG} from "./hooks/useTG.js";
import AdminPage from "./components/common/admin.jsx";
import {layoutConfig} from "./configs/layoutConfig.js";
import TheFooter from "./components/ui/layout/bottomNav.jsx";


export default function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  const [styleMain, setStyleMain] = useState(0);
  const tg = useTG()

  useEffect(() => {
    console.log('useEffect')
  }, [tg]);


  useMiniAppInit()
  const handleClick = async () => {
    const api = new UserApi();
    const res = await api.login(tg.initData)
    setUser(res);
  }


  return (
    <div className={`bg-slate-800 text-white h-screen flex flex-col items-center`}
         style={{paddingTop: `${styleMain}px`}}
    >
      <TheHeader/>
      <button onClick={handleClick} className='bg-sky-600 hover:cursor-pointer active:bg-sky-800 p-3 mb-2'>Жать и
        смотреь
      </button>
      <p>{user && user.username}</p>

      <p>safe device top: {styleMain} px</p>
      <p>safe device bottom: {layoutConfig.safeAreaBottom} px</p>
      <div className="flex-1 w-full">{renderPage(page)}</div>
      {user && user.tg_id === 116627792 ? <AdminPage/> : null}
      <TheFooter setPage={setPage} currentPage={page}/>
    </div>
  );
}




