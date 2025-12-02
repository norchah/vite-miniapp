import TheHeader from "./components/ui/layout/TheHeader.jsx";
import {useMiniAppInit} from "./hooks/useMiniAppInit.js";
import {useEffect, useState} from "react";
import {renderPage} from "./utils/renderPage.jsx";
import AdminPage from "./components/common/admin.jsx";
import TheFooter from "./components/ui/layout/bottomNav.jsx";
import {useMiniAppAuth} from "./hooks/useMiniAppAuth.js";
import {siteConfig} from "./configs/siteConfig.js";
import {useTgData} from "./hooks/useTgData.js";
// import {useTgData} from "./hooks/useTgData.js";

const cards = [
  {id: 1, name: 'Users', href: 'users', icon: ''},
  {id: 4, name: 'Keys', href: 'keys', icon: ''},
  {id: 1, name: 'Servers', href: 'servers', icon: ''},
  {id: 3, name: 'Payments', href: 'payments', icon: ''},
  {id: 2, name: 'Referrals', href: 'referrals', icon: ''},
]


export default function App() {
  const [page, setPage] = useState('home');
  const {safeZoneTop, safeZoneBottom} = useMiniAppInit()
  const {user, error, loading} = useMiniAppAuth();
  const {tgData} = useTgData()

  useEffect(() => {
    if (safeZoneTop !== 0 && safeZoneTop) {
      return tgData.ready()
    }
  }, [tgData]);

  // ЛОАДЕР
  if (loading) {
    return (
      <div className="bg-slate-800 text-white flex flex-col items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  // ОШИБКА
  if (error) {
    return (
      <div className="bg-slate-800 text-white h-screen flex flex-col items-center justify-center">
        <h1>Error: {error}</h1>
      </div>
    );
  }

  // ОСНОВНОЕ ПРИЛОЖЕНИЕ
  return (
    <div
      className="bg-slate-800 text-white h-screen flex flex-col items-center m-auto outline outline-1 max-w-[456px] p-5"
      style={{paddingTop: `${safeZoneTop}px`, paddingBottom: `${safeZoneBottom}px`}}
    >
      <TheHeader/>

      {/* Карточки */}
      <ul className="flex flex-col w-full mt-6">
        {siteConfig.navMenu.map((card) => (
          <li
            key={card.id}
            className="
            w-full h-10 bg-slate-700
            flex items-center justify-center text-xs font-medium
            first:rounded-t-lg mb-[2px] last:rounded-b-lg last: mb-none"
          >
            <button onClick={card.href} className='w-full h-full'>
              {card.name}
            </button>
          </li>
        ))}
      </ul>


      {/*<div className="flex-1 w-full">{renderPage(page)}</div>*/}

      {user?.id === 116627792 && <AdminPage/>}

      {/*<TheFooter*/}
      {/*  setPage={setPage}*/}
      {/*  currentPage={page}*/}
      {/*  safeBottom={safeZoneBottom}*/}
      {/*/>*/}
    </div>
  );
}





