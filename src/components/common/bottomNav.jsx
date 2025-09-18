import {Link, useLocation} from 'react-router-dom';
import {siteConfig} from "../../configs/siteConfig.js";


export default function TheFooter({setPage, currentPage}) {
  return (
    <nav className="fixed bottom-0 w-screen h-21 bg-gray-800 border-t-1 border-gray-600 pt-2">
      <ul className="flex flex-row justify-around w-full h-full">
        {siteConfig.bottomNavMenu.map((item) => {
          const isActive = location.pathname === item.href;
          const color = isActive ? 'text-cyan-600' : '';
          const Icon = item.icon;

          return (
            <li key={item.id} className="w-full h-full">
              <button
                onClick={() => setPage(item.href)}
                className={`
                ${currentPage === item.href ? 'text-cyan-600' : ''}
                flex flex-col justify-start items-center w-full h-full
                `}
              >
                <Icon className={`size-7 ${color}`}/>
                <p className={`text-xs ${color}`}>{item.name}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}