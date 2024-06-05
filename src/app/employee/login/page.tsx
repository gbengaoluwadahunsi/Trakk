"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import Image from "next/image";
import loginImage from "../../../../public/login.jpg";
import logo from "../../../../public/Trakk.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [companyName, setCompanyName] = useState("");
  const router = useRouter();
  const notify = () => toast.success("Login Successful!");
  const notifyError = (message : string) => toast.error(message);

  const verifyCompany = async (companyName:string) => {
    try {
      const response = await axios.post("/api/verify-staff-company", { companyName });
      return response.data.valid;
      
    } catch (error) {
      console.log("Error verifying company.", error);
      return false;
    }
  };


  const onSubmit = async (data:any) => {
    const isCompanyRegistered = await verifyCompany(data.companyName);
    console.log(isCompanyRegistered);
    if (!isCompanyRegistered) {
      notifyError("Company not registered.");
      return;
    }

    try {
      // Mock success response
      localStorage.setItem("token", "mock-token");
      notify();
      setTimeout(() => {
        router.push("/employee/dashboard");
      }, 1000);
    } catch (error) {
      notifyError("Login failed, please try again.");
      console.error("Login failed:", error);
    }
  };

  const handleAdminLogin = () => {
    router.push("/admin/login");
  };

  const handleEmployeeSignUp = () => {
    router.push("/employee/sign-up");
  };

  return (
    <section className="md:flex flex-row h-screen">
      <div className="basis-1/3 relative">
          
        <Image
          src={loginImage}
          alt="Login page image"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          className="hidden lg:block absolute shadow-lg shadow-stone-700"
        />
      </div>
      <div className=" flex flex-col flex-1 items-center justify-center bg-slate-800">
        <div className=" bg-white px-12  py-6 rounded w-[32rem] h-[40rem] shadow-lg shadow-stone-700">
        <div className=" flex items-center justify-center my-4">
         <Image
          src={logo}
          alt="Login page image"
          objectFit="cover"
          // placeholder="blur"
          width={180}
          height={50}
          
        />
         </div>
          <h1 className=" text-2xl font-bold">Employee Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="py-4 space-y-12">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-500 rounded"
            />
            {errors.email && <span className="text-red-500">Email is required</span>}
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-500 rounded"
            />
            {errors.password && <span className="text-red-500">Password is required</span>}
            <input
              {...register("companyName", { required: true })}
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full p-2 border border-gray-500 rounded"
            />
            {errors.companyName && <span className="text-red-500">Company Name is required</span>}
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <ToastContainer />
          <button
            onClick={handleEmployeeSignUp}
            className="mt-4 slate-800 hover:underline"
          >
            No Account? Sign-up
          </button>
        </div>
        <button
          onClick={handleAdminLogin}
          className="mt-4 text-white hover:underline"
        >
          If you are an Admin, click here to login.
        </button>
      </div>
    </section>
  );
};

export default LoginPage;
