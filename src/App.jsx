import BottomNav from "./components/common/bottomNav.jsx";
import TheHeader from "./components/ui/layout/TheHeader.jsx";
import {useMiniAppInit, useTgUnsafeData} from "./hooks/useMiniAppInit.js";
import {useState} from "react";
import {renderPage} from "./utils/renderPage.js";
import {UserApi} from "./api/userApi.js";
import {useTG} from "./hooks/useTG.js";
import AdminPage from "./components/common/admin.jsx";


export default function App() {
  const [user, setUser] = useState(null);
  const tg = useTG()


  const {safe, safeTg} = useMiniAppInit()
  const tgUnsafe = useTgUnsafeData();
  const initUnsafeData = JSON.stringify(tgUnsafe.initDataUnsafe, null, 2);

  const [page, setPage] = useState('home');

  const handleClick = async () => {
    const api = new UserApi();
    const res = await api.login(tg.initData)
    setUser(res);
  }

  return (
    <div className="bg-slate-800 text-white h-screen flex flex-col items-center pt-[47px]">
      <TheHeader/>
      <button onClick={handleClick} className='bg-sky-600 hover:cursor-pointer active:bg-sky-800'>Жать и смотреь
      </button>
      <p>{user && user.username}</p>
      <p>{safe && safe.top}</p>
      <p>{safe && safe.bottom}</p>
      <p>{safeTg && safe.top}</p>
      <p>{safeTg && safe.bottom}</p>
      <div className="flex-1 w-full">{renderPage(page)}</div>
      {user && user.tg_id === 116627792 ? <AdminPage/> : null}
      <BottomNav setPage={setPage} currentPage={page}/>
    </div>
  );
}




