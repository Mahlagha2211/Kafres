import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-mainColor w-full h-[60px] fixed rounded-b-full  font-bold shadow overflow-hidden text-[15px] z-50">
      <ul className="grid grid-cols-7 h-full ">
        <li className="flex justify-center items-center ">
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? "navItem" : ""}  `}
          >
            خانه
          </NavLink>
        </li>
        <li className="flex justify-center items-center">
          <NavLink
            to="/Portfolio"
            end={false}
            className={({ isActive }) => `${isActive ? "navItem" : ""}  `}
          >
            نمونه کار
          </NavLink>
        </li>
        <li className="flex justify-center items-center">
          <NavLink
            to="/blog"
            className={({ isActive }) => `${isActive ? "navItem" : ""}  `}
          >
            بلاگ کافرس
          </NavLink>
        </li>
        <li className="flex justify-center items-center">
          <NavLink
            to="/opinion"
            className={({ isActive }) => `${isActive ? "navItem" : ""}  `}
          >
            نظر مشتریان
          </NavLink>
        </li>
        <li className="flex justify-center items-center">
          <NavLink
            to="/about"
            className={({ isActive }) => `${isActive ? "navItem" : ""}  `}
          >
            درباره ما
          </NavLink>
        </li>
        <li className="flex justify-center items-center">
          <NavLink
            to="/contact"
            className={({ isActive }) => `${isActive ? "navItem" : ""}  `}
          >
            تماس با ما
          </NavLink>
        </li>
        <li className="flex justify-center items-center">
          <img src="./image/logo.jpg" alt="" className="rounded-full h-12" />
        </li>
      </ul>
    </div>
  );
}
