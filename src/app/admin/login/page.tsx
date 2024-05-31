"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Poller_One }  from "next/font/google";

export const poller_one = Poller_One({
  subsets: ['latin'],
  display: 'swap',
  weight: "400"
})

const AdminLoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [companyName, setCompanyName] = useState('');
  const router = useRouter();

  const onSubmit = async (data :object) => {
    try {
      const response = await axios.post('/api/admin-login', {
        ...data,
      });
      localStorage.setItem('token', response.data.token);
      router.push('/admin-dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleCreateProfile = () => {
    router.push('/admin/sign-up');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-no-repeat bg-admin1">
      <div className="bg-slate-800 p-12 rounded shadow-md w-[32rem] h-[36rem] ">
      <span className={` text-2xl md:text-4xl flex justify-center items-center py-8 font-mono font-extrabold  ${poller_one.className} text-zinc-200`}>
          Trakk
        </span >
        <h1 className=" text-zinc-100 text-2xl font-bold">Admin Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="py-4 space-y-12">
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && <span className="text-red-500">Email is required</span>}
          <input
            {...register('password', { required: true })}
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.password && <span className="text-red-500">Password is required</span>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleCreateProfile}
          className="mt-4 text-zinc-100 hover:underline"
        >
           Not Signed-up? Create Company Profile
        </button>
      </div>
    </div>
  );
};

export default AdminLoginPage;
