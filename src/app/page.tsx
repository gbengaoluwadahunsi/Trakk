
'use client'

import Image from "next/image";
import Head from "next/head";
import { useState , useEffect} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "animate.css";
import MovingDot from "../components/ui/MovingDot";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from  "../../public/Trakk.png"




export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("employee/login");
  };

  const [toggleMode, setToggleMode] = useState(false);


  return (
    <main className="min-h-screen  flex  flex-col ">
      <div className="flex justify-between py-4 items-center shadow-xl bg-slate-200  px-8 xl:px-16 ">
      <Image
          src={logo}
          alt="Login page image"
          objectFit="cover"
          // placeholder="blur"
          width={180}
          height={50}
        />
        <span
          className=" bg-slate-800 md:hover:bg-slate-600 cursor-pointer rounded-full p-4"
          onClick={() => setToggleMode(!toggleMode)}
        >
          {" "}
          {toggleMode ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-amber-50" />
          )}
        </span>
      </div>
      <div className="text-center justify-center -mt-[10rem]    bg-cover bg-no-repeat bg-center sm:mt-0 items-center flex flex-col gap-6 flex-1 px-8 xl:px-16"   style={{ backgroundImage: " linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/di6dqfygg/image/upload/v1717567824/bg2_sx0idz.jpg')"}}>
        <p
          className={`xl:w-[60%] md:text-3xl  lg:font-semibold text-white z-50 leading-[3.2rem] animate__animated animate__backInDown `}
        >
          Effortlessly Track and Manage Your Team&apos;s Tasks with Real-Time
          Employee Scheduling Made Easy.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {" "}
          <button
            onClick={handleGetStarted}
            className=" cursor-pointer text-white px-4 md:text-2xl py-2 rounded hover:bg-blue-600 bg-[#6d81ff]"
          >
            Get Started
          </button>
          <button className="bg-red-700 text-white px-4  md:text-2xl py-2 rounded hover:bg-red-800">
            Download App
          </button>
        </div>
      </div>
      <div className=" bg-gray-800 text-white px-8 xl:px-16">&copy; {new Date().getFullYear()}</div>
   
    </main>
  );
}
