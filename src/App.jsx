import TheHeader from "./components/ui/layout/TheHeader.jsx";
import {useMiniAppInit} from "./hooks/useMiniAppInit.js";
import {useEffect, useState} from "react";
import {renderPage} from "./utils/renderPage.jsx";
import {UserApi} from "./api/userApi.js";
import {useTG} from "./hooks/useTG.js";
import AdminPage from "./components/common/admin.jsx";
import TheFooter from "./components/ui/layout/bottomNav.jsx";


export default function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  const tg = useTG()
  const [errorMessage, setErrorMessage] = useState(null)
  const safe = useMiniAppInit()

  useEffect(() => {
    async function login() {
      try {
        const api = new UserApi()
        setUser(await api.login(tg.initData))
        setErrorMessage(null)
      } catch (e) {
        setErrorMessage(e.message)
      }
    }
    login()
  }, [tg]);

  useEffect(() => {
    setTop(safe.top);
    setBottom(safe.bottom);
  }, [safe]);



  return (
    <div className={`bg-slate-800 text-white h-screen flex flex-col items-center`}
         style={{paddingTop: `${top}px`}}
    >
      <TheHeader/>

      {errorMessage && <p>{errorMessage}</p>}
      <p>{user && user.username}</p>
      <div className="flex-1 w-full">{renderPage(page)}</div>
      {user && user.tg_id === 116627792 ? <AdminPage/> : null}
      <TheFooter setPage={setPage} currentPage={page} safeBottom={bottom}/>
    </div>
  );
}





