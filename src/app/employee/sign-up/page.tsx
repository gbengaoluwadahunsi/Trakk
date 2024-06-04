
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Poller_One } from "next/font/google";
import Image from "next/image";
import loginImage from "../../../../public/signUp.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const poller_one = Poller_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const EmployeeSignupPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [companyName, setCompanyName] = useState("");
  const [staffCode, setStaffCode] = useState("");
  const router = useRouter();
  const notify = () => toast.success("Sign up successful!");
  const notifyError = (message:string) => toast.error(message);

  const verifyStaffCode = async (staffCode:string) => {
    try {
      const response = await axios.post("/api/verify-staff-code", { staffCode });
      return response.data.valid;
    } catch (error) {
      console.log("Invalid staff code", error);
      return false;
    }
  };

  const verifyCompany = async (companyName:string) => {
    try {
      const response = await axios.post("/api/verify-staff-company", { companyName });
      return response.data.valid;
      
    } catch (error) {
      console.log("Error verifying company.");
      return false;
    }
  };


  const onSubmit = async (data:any) => {
    const isStaffCodeValid = await verifyStaffCode(data.staffCode);
    if (!isStaffCodeValid) {
      notifyError("Invalid staff code.");
      return;
    }

    const isCompanyRegistered = await verifyCompany(data.companyName);
    console.log(isCompanyRegistered);
    if (!isCompanyRegistered) {
      notifyError("Company not registered.");
      return;
    }

    // Continue with the signup process

    try {
      // Mock success response
      localStorage.setItem("token", "mock-token");
      notify();
      setTimeout(() => {
        router.push("/employee/login");
      }, 1000);
     
    } catch (error) {
      notifyError("Sign up failed, please try again.");
      console.error("Sign up failed:", error);
    }
  };

  return (
    <section className="md:flex flex-row h-screen">
      <div className="basis-1/2 relative">
        <Image
          src={loginImage}
          alt="Signup page image"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          className="hidden lg:block absolute"
        />
      </div>
      <div className="basis-1/2 flex items-center justify-center bg-slate-100">
        <div className="bg-slate-800 px-12 py-6 rounded shadow-md w-[32rem] h-[44rem]">
          <span
            className={`text-2xl md:text-4xl flex justify-center items-center py-8 font-mono font-extrabold ${poller_one.className} text-zinc-200`}
          >
            Trakk
          </span>
          <h1 className="text-zinc-100 text-2xl font-bold">Employee Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="py-2 space-y-8">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.name && <span className="text-red-500">Name is required</span>}
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && <span className="text-red-500">Email is required</span>}
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.password && <span className="text-red-500">Password is required</span>}
            <input
              {...register("companyName", { required: true })}
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.companyName && <span className="text-red-500">Company Name is required</span>}
            <input
              {...register("staffCode", { required: true })}
              type="text"
              placeholder="Staff Code"
              value={staffCode}
              onChange={(e) => setStaffCode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.staffCode && <span className="text-red-500">Staff Code is required</span>}
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded"
            >
              Sign Up
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default EmployeeSignupPage;

