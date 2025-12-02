import TheHeader from "./components/ui/layout/TheHeader.jsx";
import {useMiniAppInit} from "./hooks/useMiniAppInit.js";
import {useEffect, useState} from "react";
import {renderPage} from "./utils/renderPage.jsx";
import AdminPage from "./components/common/admin.jsx";
import TheFooter from "./components/ui/layout/bottomNav.jsx";
import {useMiniAppAuth} from "./hooks/useMiniAppAuth.js";
// import {useTgData} from "./hooks/useTgData.js";

const cards = [
  {id: 1, name: 'Получить', href: ''},
  {id: 2, name: 'Рефералы'},
  {id: 3, name: 'Статистика'},
  {id: 4, name: 'Настройки'},
]


export default function App() {
  const [page, setPage] = useState('home');
  const {safeZoneTop, safeZoneBottom} = useMiniAppInit()
  const {user, error, loading} = useMiniAppAuth();

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
      <div className="flex flex-col w-full mt-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full h-10 bg-slate-700 rounded-lg flex items-center justify-center text-xs font-medium mb-1"
          >
            {card.name}
          </div>
        ))}
      </div>


      <div className="flex-1 w-full">{renderPage(page)}</div>

      {user?.id === 116627792 && <AdminPage/>}

      {/*<TheFooter*/}
      {/*  setPage={setPage}*/}
      {/*  currentPage={page}*/}
      {/*  safeBottom={safeZoneBottom}*/}
      {/*/>*/}
    </div>
  );
}





