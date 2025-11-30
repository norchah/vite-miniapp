import {siteConfig} from "../../../configs/siteConfig.js";

export default function TheFooter({setPage, currentPage, safeBottom}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 px-2 pb-2"
         style={{paddingBottom: `${safeBottom}px`}}
    >
      <nav
        className="
          mx-auto w-full max-w-md
          h-20
          rounded-2xl
          bg-white/10 dark:bg-black/20
          backdrop-blur-xl
          border border-white/20 dark:border-white/10
          shadow-lg shadow-black/20
          flex items-center justify-center
        "
      >
        <ul className="flex flex-row justify-around w-full px-4">
          {siteConfig.bottomNavMenu.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.href;

            return (
              <li key={item.id} className="flex-1">
                <button
                  onClick={() => setPage(item.href)}
                  className={`
                    flex flex-col items-center justify-center w-full py-1
                    transition-all duration-300
                    ${isActive ? "text-cyan-400 scale-105" : "text-white/70"}
                  `}
                >
                  <div
                    className={`
                      flex items-center justify-center
                      w-12 h-12 rounded-xl
                      transition-all duration-300
                      ${isActive
                      ? "bg-cyan-500/20 backdrop-blur-md shadow-md shadow-cyan-500/30"
                      : "hover:bg-white/10"}
                    `}
                  >
                    <Icon
                      className={`
                        size-7 transition-colors duration-300
                        ${isActive ? "text-cyan-400" : "text-white/70"}
                      `}
                    />
                  </div>

                  <p
                    className={`
                      text-xs mt-1 transition-all duration-300
                      ${isActive ? "text-cyan-400" : "text-white/60"}
                    `}
                  >
                    {item.name}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
