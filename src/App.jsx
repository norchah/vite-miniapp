import {Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import Keys from "./pages/keys.jsx";
import Payments from "./pages/payments.jsx";
import BottomNav from "./components/common/bottomNav.jsx";
import TheHeader from "./components/ui/layout/TheHeader.jsx";
import {useMiniAppInit, useMiniApp} from "./hooks/useMiniAppInit.js";
import {useState} from "react";


export default function App() {
  useMiniAppInit()
  const tg = useMiniApp();

  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home/>;
      case 'keys':
        return <Keys/>;
      case 'payments':
        return <Payments/>;
      default:
        return <Home/>
    }
  }

  return (
    <div className="bg-slate-800 text-white h-screen flex flex-col items-center">
      <TheHeader/>
      <p>{tg.viewport}</p>
      <div className="flex-1 w-full">{renderPage()}</div>
      <BottomNav setPage={setPage} currentPage={page} />
    </div>
  );
}




