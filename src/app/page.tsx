
"use client"

import Image from "next/image";
import Head from 'next/head';
import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import "animate.css";
import { Poller_One }  from "next/font/google";
import { FaSun, FaMoon } from "react-icons/fa";


export const poller_one = Poller_One({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
})

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('employee/login')
  }

  const [toggleMode ,setToggleMode] = useState(false)
  return (
    
    <main className="min-h-screen background-image  bg-cover bg-no-repeat bg-center flex  flex-col px-8 xl:px-16  ">
      
      
      <div className="flex justify-between my-4">
        <span className={` text-2xl md:text-4xl font-mono font-extrabold  ${poller_one.className} text-zinc-200`}>
          Trakk
        </span >
      <span className="md:hover:bg-slate-600 cursor-pointer rounded-full p-4" onClick={() => setToggleMode(!toggleMode)}> {toggleMode? <FaSun className="text-yellow-400"/> : <FaMoon className="text-zinc-200"/>}</span>
      </div>
      <div className="text-center justify-center -mt-[10rem]  sm:mt-0 items-center flex flex-col gap-6 flex-1 ">

        <p className={`xl:w-[60%] md:text-3xl  lg:font-semibold text-zinc-100 leading-10 animate__animated animate__backInDown ${poller_one.className}`}>
          Effortlessly Track and Manage Your Team&apos;s Tasks with Real-Time
          Employee Scheduling Made Easy.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {" "}
          <button  onClick= {handleGetStarted} className="bg-blue-500 text-white px-4 md:text-2xl py-2 rounded hover:bg-blue-600">
          Get Started
          </button>
          <button className="bg-red-700 text-white px-4  md:text-2xl py-2 rounded hover:bg-red-800">
            Download App
          </button>
        </div>
      </div>
      <div>&copy; {new Date().getFullYear()}</div>
    </main>
  );
}
