import TheHeader from "./components/ui/layout/TheHeader.jsx";
import TheFooter from "./components/ui/layout/bottomNav.jsx";
import AdminPage from "./components/common/admin.jsx";
import {siteConfig} from "./configs/siteConfig.js";
import Card from "./components/card.jsx";
import {useMiniApp} from "./hooks/useMiniApp.js";
import {renderPageByKey} from "./pages/pages.js";
import {useState} from "react";

export default function App() {
  const {tgData, user, safeTop, safeBottom, loading, error} = useMiniApp();
  const [page, setPage] = useState('home');

  // Показываем лоадер, пока не готовы tgData или user
  if (!tgData || safeTop === null || loading) {
    return (
      <div className="bg-slate-800 text-white h-screen flex items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  // Ошибка
  if (error) {
    return (
      <div className="bg-slate-800 text-white h-screen flex items-center justify-center">
        <h1>Error: {error}</h1>
      </div>
    );
  }

  return (
    <div
      className="bg-slate-800 text-white h-screen flex flex-col items-center m-auto max-w-[456px] p-5"
      style={{paddingTop: `${safeTop}px`, paddingBottom: `${safeBottom}px`}}
    >
      <TheHeader/>

      {/* Карточки */}
      <div className="mt-6">{renderPageByKey(page)}</div>


      {/* Страница админа */}
      {/*{user?.id === 116627792 && <AdminPage/>}*/}

    </div>
  );
}
