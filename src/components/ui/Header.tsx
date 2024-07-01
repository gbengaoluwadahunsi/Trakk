"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { FaSun, FaMoon } from "react-icons/fa";
import  logo from "../../../public/logo.png"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";


const links = [
  { name: 'Home', href: '/' },
   {
    name: 'Pricing',
    href: '/landingPage/pricing',
   
  },
  { name: 'Resources', href: '/landingPage/resources' },
];

const Header = () => {
 const pathname =  usePathname()
  const [toggleMode, setToggleMode] = useState(false);
  const router = useRouter()

  // useEffect(() => {
  //   if (localStorage.getItem("theme") === "dark") {
  //     setToggleMode(true);
  //   } else {
  //     setToggleMode(false);
  //   }
  // }, [])

  const handleStartTrial = () => {
    router.push('/startTrial')
  }

  return (
    <nav className="flex justify-between py-2 bg-white items-center border-b  px-8 xl:px-12 ">
      <span className="grid grid-cols-4 items-center ">  
        <Image
          src={logo}
          alt="Login page image"
          width={20}
          height={8}
          
        /><span className="text-[2em]  -ml-2  col-span-3  font-bold ">Trakk</span></span>

      <div className="flex  basis-[40%] text-base font-medium justify-between items-center">
        {
          links.map((link) => {
            return (
              <Link
              key =  {link.name}
              href = {link.href}
              className={` ${pathname === link.href ?' text-[#1A7DE5] font-semibold ' : ""} flex justify-between gap-12  cursor-pointer list-none`}
              >
                <li>{link.name}</li>
               
              </Link>
            )
          } 
        )
        }
   
      <Button className="rounded bg-[#1A7DE5] hover:bg-[#5a95d4] ">Login</Button>
      <Button className=" rounded text-black bg-[#F0F2F5] hover:bg-[#b4bcc7]" onClick={handleStartTrial}>Start free trial</Button>
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
