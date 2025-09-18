import {Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import Keys from "./pages/keys.jsx";
import Payments from "./pages/payments.jsx";
import BottomNav from "./components/common/bottomNav.jsx";
import TheHeader from "./components/ui/layout/TheHeader.jsx";
import {useMiniAppInit, useMiniApp} from "./hooks/useMiniAppInit.js";


export default function App() {
  const {viewport} = useMiniApp();
  useMiniAppInit()

  return (
    <div className="bg-gray-800 text-white h-screen flex flex-col items-center">
      <TheHeader/>
      <p>{viewport}</p>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/keys" element={<Keys/>}/>
      </Routes>
      <BottomNav/>
    </div>
  );
}




