"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StartTrialData from "@/components/ui/AdminDashBoardComponents/startTrials/startTrialData";
import StartTrialCard from "@/components/ui/AdminDashBoardComponents/startTrials/StartTrialCard";

const StartTrial = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [companyName, setCompanyName] = useState("");
  const router = useRouter();
  const notify = () => toast.success("registration Successful!");
  const notifyError = (message: string) => toast.error(message);

  const verifyCompany = async (companyName: string) => {
    try {
      const response = await axios.post("/api/verify-staff-company", {
        companyName,
      });
      return response.data.valid;
    } catch (error) {
      console.log("Error verifying company.", error);
      return false;
    }
  };

  const onSubmit = async (data: any) => {
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
        router.push("/admin/dashboard");
      }, 500);
    } catch (error) {
      notifyError("Login failed, please try again.");
      console.error("Login failed:", error);
    }
  };

  return (
    <section className="md:flex flex-col   bg-slate-100 min-h-screen px-8 xl:px-12">
      <div className=" my-8 items-center  text-center justify-center">
        <h1 className=" text-3xl font-bold  my-2 ">Start your 14-day trial</h1>
        <span>No credit card required. Cancel anytime</span>
      </div>
      <div className=" bg-white px-12  py-6 rounded w-[32rem] mx-auto h-fit shadow-lg mt-2 shadow-slate-400">
        <h1 className=" text-2xl font-bold">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="py-4 space-y-8">
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
          <input
            {...register("companyName", { required: true })}
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full p-2 border border-gray-500 rounded"
          />
          {errors.companyName && (
            <span className="text-red-500">Company Name is required</span>
          )}
          <Button
            type="submit"
            className="w-full py-2  text-white rounded bg-[#1A7DE5] hover:bg-[#497bb0]"
          >
            Start 14-day trial
          </Button>
        </form>

        <ToastContainer />
      </div>
      <div className="m-2">
        <h4 className="self-start text-2xl font-bold  my-4">
          What&apos;s included
        </h4>
        <div className="grid grid-cols-5 gap-2 ">
          {StartTrialData.map((card, index) => (
            <StartTrialCard
              key={index}
              icon={card.icon}
              text={card.text}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartTrial;
