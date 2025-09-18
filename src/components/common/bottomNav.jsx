import {Link, useLocation} from 'react-router-dom';
import {siteConfig} from "../../configs/siteConfig.js";


export default function TheFooter() {
  const location = useLocation(); // текущий путь

  return (
    <nav className="fixed bottom-0 w-screen h-21 bg-gray-800 pt-2">
      <ul className="flex flex-row justify-around w-full h-full">
        {siteConfig.bottomNavMenu.map((item) => {
          const isActive = location.pathname === item.href;
          const color = isActive ? 'text-cyan-600' : '';
          const Icon = item.icon;

          return (
            <li key={item.id} className="w-full h-full">
              <Link
                to={item.href}
                className="flex flex-col justify-start items-center w-full h-full"
              >
                <Icon className={`size-7 ${color}`}/>
                <p className={`text-xs ${color}`}>{item.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}