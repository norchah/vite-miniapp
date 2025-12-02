import TheHeader from "./components/ui/layout/TheHeader.jsx";
import {useMiniAppInit} from "./hooks/useMiniAppInit.js";
import {useMiniAppAuth} from "./hooks/useMiniAppAuth.js";
import TheFooter from "./components/ui/layout/bottomNav.jsx";
import AdminPage from "./components/common/admin.jsx";
import {siteConfig} from "./configs/siteConfig.js";

export default function App() {
  const {safeZoneTop, safeZoneBottom, tgData} = useMiniAppInit();
  const {user, loading, error} = useMiniAppAuth();

  // Показываем лоадер, пока не готовы tgData или user
  if (!tgData || safeZoneTop === null || loading) {
    return (
      <div className="bg-slate-800 text-white h-screen flex flex-col items-center justify-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  // Ошибка
  if (error) {
    return (
      <div className="bg-slate-800 text-white h-screen flex flex-col items-center justify-center">
        <h1>Error: {error}</h1>
      </div>
    );
  }

  return (
    <div
      className="bg-slate-800 text-white h-screen flex flex-col items-center m-auto max-w-[456px] p-5"
      style={{paddingTop: `${safeZoneTop}px`, paddingBottom: `${safeZoneBottom}px`}}
    >
      <TheHeader/>

      {/* Аватар */}
      {user?.photoUrl && (
        <img
          src={user.photoUrl}
          alt="avatar"
          className="w-20 h-20 rounded-full mb-4"
        />
      )}

      {/* Карточки */}
      <ul className="flex flex-col w-full mt-6">
        {siteConfig.navMenu.map((card) => (
          <li
            key={card.id}
            className="w-full h-10 bg-slate-700 flex items-center justify-center text-xs font-medium first:rounded-t-lg mb-[2px] last:rounded-b-lg"
          >
            <button onClick={() => console.log(card.href)} className="w-full h-full">
              {card.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Страница админа */}
      {user?.id === 116627792 && <AdminPage/>}

      {/* Footer */}
      <TheFooter
        setPage={() => {
        }}
        currentPage=""
        safeBottom={safeZoneBottom}
      />
    </div>
  );
}
