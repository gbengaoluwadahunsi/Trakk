"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { useForm } from "react-hook-form";
import logo from "../../../../public/Trakk.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [companyName, setCompanyName] = useState("");
  const router = useRouter();
  const notify = () => toast.success("Login Successful!");
  const notifyError = (message: string) => toast.error(message);

  const onSubmit = async (data: object) => {
    try {
      // const response = await axios.post('/api/admin-login', {
      //   ...data,
      // });
      // localStorage.setItem('token', response.data.token);
      router.push("/admin/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleCreateProfile = () => {
    notify();
    setTimeout(() => {
      router.push("/admin/dashboard");
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-no-repeat bg-admin1">
      <div className="bg-white p-12 rounded shadow-md w-[32rem] h-[36rem] ">
        <div className=" flex items-center justify-center my-4">
          <Image
            src={logo}
            alt="Login page image"
            objectFit="cover"
            width={180}
            height={50}

          />
        </div>

        <h1 className=" text-2xl font-bold">Admin Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="py-4 space-y-12">
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-500 rounded"
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-500 rounded"
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
          onClick={handleCreateProfile}
          className="mt-4 text-slate-800 hover:underline"
        >
          Not Signed-up? Create Company Profile
        </button>
      </div>
    </div>
  );
};

export default AdminLoginPage;
