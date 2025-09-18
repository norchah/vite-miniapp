import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/home.jsx";
import Keys from "./pages/keys.jsx";
import Payments from "./pages/payments.jsx";
import BottomNav from "./components/common/bottomNav.jsx";
import {useTG} from "./hooks/useTG.js";
import TheHeader from "./components/ui/layout/TheHeader.jsx";
import {useEffect} from "react";


export default function App() {
  const tg = useTG()

  useEffect(() => {
    if (tg && typeof tg.disableVerticalSwipes === "function") {
      tg.disableVerticalSwipes();
    }
    if (tg && typeof tg.lockOrientation === "function") {
      tg.lockOrientation();
    }
    if (tg && typeof tg.requestFullscreen === 'function') {
      tg.requestFullscreen();
    }
  }, [tg]);

  console.log(tg.source)
  return (
    <div className="p-4 bg-gray-800 text-white h-screen">
      <TheHeader/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/keys" element={<Keys/>}/>
      </Routes>
      <BottomNav/>
    </div>
  );
}




