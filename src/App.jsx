import BottomNav from "./components/common/bottomNav.jsx";
import TheHeader from "./components/ui/layout/TheHeader.jsx";
import {useMiniAppInit, useMiniApp} from "./hooks/useMiniAppInit.js";
import {useEffect, useState} from "react";
import {renderPage} from "./utils/renderPage.js";
import {UserApi} from "./api/userApi.js";


export default function App() {
  const [user, setUser] = useState(null);
  useMiniAppInit()
  const tg = useMiniApp();

  const [page, setPage] = useState('home');

  const handleClick = async () => {
    const api = new UserApi();
    const res = await api.login(tg.initData)
    setUser(res);
  }

  return (
    <div className="bg-slate-800 text-white h-screen flex flex-col items-center">
      <TheHeader/>
      <button onClick={handleClick} className='bg-sky-600 hover:cursor-pointer active:bg-sky-800'>Жать и смотреь
      </button>
      <p>{user && user.username}</p>
      <div className="flex-1 w-full">{renderPage(page)}</div>
      <BottomNav setPage={setPage} currentPage={page}/>
    </div>
  );
}




