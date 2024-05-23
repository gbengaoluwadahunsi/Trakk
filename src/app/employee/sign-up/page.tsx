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

const EmployeeSignupPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [companyName, setCompanyName] = useState('');
  const router = useRouter();

  const onSubmit = async (data:object) => {
    try {
      const response = await axios.post('/api/employee-signup', {
        ...data,
        companyName,
      });
      localStorage.setItem('token', response.data.token);
      router.push('/employee-dashboard');
    } catch (error) {
      console.error('Sign up failed:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-slate-800 p-12 rounded shadow-md w-full max-w-md">
      <span className={` text-2xl md:text-4xl flex justify-center items-center py-8 font-mono font-extrabold  ${poller_one.className} text-zinc-200`}>
          Trakk
        </span >
        <h1 className=" text-zinc-100 text-2xl font-bold">Employee Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className=" py-4 space-y-6">
          <input
            {...register('name', { required: true })}
            type="text"
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.name && <span className="text-red-500">Name is required</span>}
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
          <input
            {...register('companyName', { required: true })}
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.companyName && <span className="text-red-500">Company Name is required</span>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeSignupPage;
