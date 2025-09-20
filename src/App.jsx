import BottomNav from "./components/common/bottomNav.jsx";
import TheHeader from "./components/ui/layout/TheHeader.jsx";
import {useMiniAppInit, useTgData} from "./hooks/useMiniAppInit.js";
import {useState} from "react";
import {renderPage} from "./utils/renderPage.js";
import {UserApi} from "./api/userApi.js";
import {useTG} from "./hooks/useTG.js";


export default function App() {
  const [user, setUser] = useState(null);
  const tg = useTG()

  // Загрузка приложения
  // Берем unsafeData и запол
  // Берем useTg -> tg.secretStorage - достаем токен, если есть:
      // Отправляем токен на проверку серверу, если действителен:
          // useMiniAppInit()
          // считаем что unsafeData является safeData
  // Берем unsafeData - initData
  useMiniAppInit()
  // const tg = useTgData();

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
      <p>InitDataUnsafe id: {tg.initDataUnsafe.id}</p>
      <p>InitDataUnsafe username: {tg.initDataUnsafe.username}</p>
      <p>{user && user.id}</p>
      <p>{user && user.firstname}</p>
      <p>{user && user.last_name}</p>
      <p>{user && user.photo_url}</p>
      <div className="flex-1 w-full">{renderPage(page)}</div>
      <BottomNav setPage={setPage} currentPage={page}/>
    </div>
  );
}




