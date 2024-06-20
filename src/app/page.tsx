
'use client'

import Image from "next/image";
import Head from "next/head";
import "animate.css";
import { useRouter } from "next/navigation";
import Header from "../components/ui/Header";
import  Footer from "../components/ui/Footer"



export default function Home() {
  const router = useRouter();
 
  const handleGetStarted = () => {
    router.push("employee/login");
  };

  return (
    <main className="min-h-screen  flex  flex-col text-[#121417]">
      <Header/>
      
      <div className="px-8 lg:py-8 xl:px-[4rem] flex flex-col gap-20 0 mx-20  ">
        <div className=" flex flex-col justify-around">
       <div className="  backgroundImage h-[36rem] p-12 rounded-lg flex flex-col gap-8 justify-center  " >
       <h4
          className={`md:text-[2.5rem]  lg:font-extrabold text-white  leading-[3.2rem] animate__animated animate__backInDown `}
        >
          Get everyone on the same page
        </h4>
        <h6 className="text-slate-100 text-2xl w-2/3">Trakk is a simple, powerful way to manage your team&apos;s schedule, spend less time on the schedule and more time on what you love.</h6>
        <div className="flex  gap-2">
          {" "}
          <button
            onClick={handleGetStarted}
            className=" cursor-pointer text-white px-8 md:text-lg py-2 rounded hover:bg-blue-600 bg-[#6d81ff]"
          >
            Staff Login
          </button>
          <button className="bg-red-700 cursor-pointer text-white px-8  md:text-lg py-2 rounded hover:bg-red-800">
            Admin Login
          </button>
        </div>
       </div>
       
      </div>
      <div className="flex flex-col gap-10">
        <h1 className=" md:text-[2rem] font-extrabold">Features that makes your life easier</h1>
       
      </div>
      <div className="flex flex-col gap-10">
        <h1 className=" md:text-xl font-extrabold">What our customers say</h1>
       
      </div>
      </div>

     <Footer/>
    
   
    </main>
  );
}
