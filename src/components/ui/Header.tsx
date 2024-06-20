import Link from "next/link";
import Image from "next/image";
import { FaSun, FaMoon } from "react-icons/fa";
import  logo from "../../../public/logo.png"
import { useState, useEffect } from "react";

const Header = () => {
  const [toggleMode, setToggleMode] = useState(false);

  return (
    <nav className="flex justify-between py-2 items-center border-b  px-8 xl:px-12 ">
      <span className="flex  gap-2">  
        <Image
          src={logo}
          alt="Login page image"
          objectFit="contain"
          width={20}
          height={8}
          
        /><span className="text-[2em] font-serif font-bold ">Trakk</span></span>

      <div className="flex  basis-[44%] text-base font-medium justify-between items-center">
      <ul className="  flex justify-between gap-12  cursor-pointer list-none">
        <li className="">Solutions</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <span>Login</span>
      <span>Start free trial</span>
      <span
        className=" bg-slate-800 md:hover:bg-slate-600 cursor-pointer rounded-full p-2 "
        onClick={() => setToggleMode(!toggleMode)}
      >
        {toggleMode ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-amber-50" />
        )}
      </span>
      </div>
    </nav>
  );
};

export default Header;
