import {Link} from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t flex justify-around p-2">
      <Link to="/">🏠</Link>
      <Link to="/payments">💳</Link>
      <Link to="/keys">🔑</Link>
    </nav>
  );
}