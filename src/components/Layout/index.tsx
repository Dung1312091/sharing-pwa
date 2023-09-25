import { Outlet, NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Icon = {
  home: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  ),
  watchList: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  chat: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
      />
    </svg>
  ),
  explorer: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  ),
  airdrop: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
      />
    </svg>
  ),
};

const Menus = [
  {
    to: "/",
    name: "Home",
    icon: Icon.home,
  },
  {
    to: "/trending",
    name: "Trending",
    icon: Icon.watchList,
  },
  {
    to: "/top-fee",
    name: "Top Fee",
    icon: Icon.chat,
  },
  {
    to: "/explore",
    name: "Explore",
    icon: Icon.explorer,
  },
  {
    to: "/airdrop",
    name: "Airdrop",
    icon: Icon.airdrop,
  },
];
interface MenuNavLinkProps {
  to: string;
  name: string;
  icon: React.ReactNode;
}

const MenuNavLink = ({
  to,
  name,
  icon,
}: React.PropsWithChildren<MenuNavLinkProps>) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          twMerge(
            "flex flex-col items-center text-sm lg:text-base text-gray-400",
            isPending ? "pending" : isActive ? " text-black link-active" : ""
          )
        }
      >
        <span className={"lg:hidden mb-2 link-icon text-blue-500/75"}>
          {" "}
          {icon}
        </span>
        {name}
      </NavLink>
    </li>
  );
};

export function Layout() {
  return (
    <div>
      <nav className="fixed z-10 w-full bottom-0 left-0 rounded-tl-lg rounded-tr-lg py-3 bg-white border-[1px] lg:static lg:mb-4 lg:border-none">
        <ul className="flex justify-around lg:justify-normal lg:gap-4">
          {Menus.map((menu) => {
            return (
              <MenuNavLink
                to={menu.to}
                name={menu.name}
                icon={menu.icon}
                key={menu.name}
              ></MenuNavLink>
            );
          })}
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
