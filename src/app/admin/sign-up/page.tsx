"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";

const AdminSignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [companyName, setCompanyName] = useState("");
  const router = useRouter();

  const onSubmit = async (data: object) => {
    try {
      const response = await axios.post("/api/register-company", {
        ...data,
      });
      localStorage.setItem("token", response.data.token);
      router.push("/admin/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  // Watch the adminPassword field to compare it with the confirm password
  const adminPassword = watch("adminPassword");

  return (
    <div className="flex items-center justify-center bg-center bg-cover bg-no-repeat h-screen">
      <div className="bg-white p-12 rounded shadow-md w-[32rem] h-[40rem]">
        <span
          className="text-2xl md:text-4xl flex justify-center items-center py-8 font-mono font-extrabold text-zinc-800"
        >
          Trakk
        </span>
        <h1 className="text-slate-800 text-2xl font-bold">
          Create Company Profile
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="py-4 space-y-12">
          <input
            {...register("companyName", { required: true })}
            type="text"
            placeholder="Company Name"
            className="w-full p-2 border border-gray-500 rounded"
          />
          {errors.companyName && (
            <span className="text-red-500">Company Name is required</span>
          )}
          <input
            {...register("adminEmail", { required: true })}
            type="email"
            placeholder="Admin Email"
            className="w-full p-2 border border-gray-500 rounded"
          />
          {errors.adminEmail && (
            <span className="text-red-500">Admin Email is required</span>
          )}
          <input
            {...register("adminPassword", { required: true })}
            type="password"
            placeholder="Admin Password"
            className="w-full p-2 border border-gray-500 rounded"
          />
          {errors.adminPassword && (
            <span className="text-red-500">Admin Password is required</span>
          )}
          <input
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === adminPassword || "Passwords do not match",
            })}
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 border border-gray-500 rounded"
          />
          {errors.confirmPassword && (
            <span className="text-red-500">Password doesn&apos;t match</span>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignupPage;
