import { NavLink } from "react-router-dom";
import { HiOutlineBars4 } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [navOpen, setNavopen] = useState(false);

  return (
    <div className="bg-mainColor w-full h-[60px] fixed rounded-b-full  font-bold shadow overflow-hidden text-[15px] z-50  ">
      <ul className="grid grid-cols-6 h-full max-md:hidden">
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
        {/* <li className="flex justify-center items-center">
          <NavLink
            to="/opinion"
            className={({ isActive }) => `${isActive ? "navItem" : ""}  `}
          >
            نظر مشتریان
          </NavLink>
        </li> */}
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
      <div className="md:hidden flex items-center justify-between px-12 h-full my-offcanvas">
        <HiOutlineBars4
          className="text-2xl cursor-pointer"
          onClick={() => setNavopen(true)}
        />
        <img
          src="./image/logo.jpg"
          alt=""
          className="rounded-full h-12 md:hidden "
        />
      </div>

      <div
        className={`bg-maincolor1  w-80 max-[330px]:w-[90%] h-full fixed right-0 top-0 z-10 p-4 shadow-[0_0_10px_black]  transition-transform duration-700 ${
          navOpen ? "translate-x-0" : "translate-x-[350px]"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <p className="text-[18px] ">کافرس</p>
          <FaTimes
            className="cursor-pointer"
            onClick={() => setNavopen(false)}
          />
        </div>
        <ul className="space-y-4">
          <li className=" ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "navItemsm" : ""
                } w-full block p-2 rounded-lg hover:bg-gray-400 `
              }
            >
              خانه
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/Portfolio"
              end={false}
              className={({ isActive }) =>
                `${
                  isActive ? "navItemsm" : ""
                } w-full block p-2 rounded-lg hover:bg-gray-400`
              }
            >
              نمونه کار
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${
                  isActive ? "navItemsm" : ""
                } w-full block p-2 rounded-lg hover:bg-gray-400`
              }
            >
              بلاگ کافرس
            </NavLink>
          </li>
          {/* <li className="">
            <NavLink
              to="/opinion"
              className={({ isActive }) =>
                `${
                  isActive ? "navItemsm" : ""
                } w-full block p-2 rounded-lg hover:bg-gray-400`
              }
            >
              نظر مشتریان
            </NavLink>
          </li> */}
          <li className="">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive ? "navItemsm" : ""
                } w-full block p-2 rounded-lg hover:bg-gray-400`
              }
            >
              درباره ما
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive ? "navItemsm" : ""
                }  w-full block p-2 rounded-lg hover:bg-gray-400`
              }
            >
              تماس با ما
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
