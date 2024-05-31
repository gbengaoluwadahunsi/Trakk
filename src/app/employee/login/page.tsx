"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Poller_One } from "next/font/google";
import Image from "next/image";
import loginImage from "../../../../public/login.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const poller_one = Poller_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [companyName, setCompanyName] = useState("");
  const router = useRouter();
  const notify = () => toast.success("Login Successful!");

  const onSubmit = async (data: object) => {
    try {
      // Dummy response for example purposes, replace with actual API call
      // const response = await axios.post("/api/employee-login", {
      //   ...data,
      //   companyName,
      // });
      // localStorage.setItem("token", response.data.token);

      notify();
      setTimeout(() => {
        router.push("/employee/dashboard");
      }, 2000);
    } catch (error) {
      toast.error("Login failed, please try again.");
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
      <div className="basis-1/2 relative">
        <Image
          src={loginImage}
          alt="Login page image"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          className="hidden lg:block absolute" // Ensure image takes the correct position
        />
      </div>
      <div className="basis-1/2 flex flex-col items-center justify-center bg-slate-100">
        <div className="bg-slate-800 p-12 rounded shadow-md w-[32rem] h-[36rem]">
          <span
            className={`text-2xl md:text-4xl flex justify-center items-center py-8 font-mono font-extrabold ${poller_one.className} text-zinc-200`}
          >
            Trakk
          </span>
          <h1 className="text-zinc-100 text-2xl font-bold">Employee Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="py-4 space-y-12">
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
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <ToastContainer />
          <button
            onClick={handleEmployeeSignUp}
            className="mt-4 text-zinc-100 hover:underline"
          >
            No Account? Sign-up
          </button>
        </div>
        <button
          onClick={handleAdminLogin}
          className="mt-4 text-slate-800 hover:underline"
        >
          If you are an Admin, click here to login.
        </button>
      </div>
    </section>
  );
};

export default LoginPage;
