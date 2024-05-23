"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Poller_One }  from "next/font/google";

export const poller_one = Poller_One({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
})

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [companyName, setCompanyName] = useState("");
  const router = useRouter();

  const onSubmit = async (data: object) => {
    try {
      const response = await axios.post("/api/employee-login", {
        ...data,
        companyName,
      });
      localStorage.setItem("token", response.data.token);
      router.push("/employee-dashboard");
    } catch (error) {
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
    <div className="flex  flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-slate-800 p-12 rounded shadow-md w-full max-w-md">
      <span className={` text-2xl md:text-4xl flex justify-center items-center py-8 font-mono font-extrabold  ${poller_one.className} text-zinc-200`}>
          Trakk
        </span >
        <h1 className=" text-zinc-100 text-2xl font-bold">Employee Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="py-4 space-y-6">
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleEmployeeSignUp}
          className="mt-4 text-zinc-100 hover:underline"
        >
          Not Account? Sign-up
        </button>
      </div>
      <button
        onClick={handleAdminLogin}
        className="mt-4 text-slate-600 hover:underline"
      >
        If you are an Admin, click here to login.
      </button>
    </div>
  );
};

export default LoginPage;
