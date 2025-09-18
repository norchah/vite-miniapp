import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/home.jsx";
import Keys from "./pages/keys.jsx";
import Payments from "./pages/payments.jsx";
import BottomNav from "./components/common/bottomNav.jsx";
import {useTG} from "./hooks/useTG.js";


export default function App() {
  const tg = useTG()

  console.log(tg.source)
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/keys" element={<Keys/>}/>
      </Routes>
      <BottomNav/>
    </div>
  );
}




