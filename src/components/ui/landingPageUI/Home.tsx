


import "animate.css";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import FeaturesLanding from "@/components/ui/FeaturesLandingpage/FeaturesLanding";
import TestimonialLandingPage from "@/components/ui/Testimonial/TestimonalLandingPage";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("employee/login");
  };

  return (
    <div className="px-8 lg:py-8 xl:px-[4rem] bg-white my-8 shadow-lg flex flex-col gap-20  mx-20  ">
      <div className=" flex flex-col justify-around">
        <div className="  bg-custom-image bg-cover bg-center bg-no-repeat h-[36rem] p-12 rounded-lg flex flex-col gap-8 justify-center  ">
          <h4
            className={`md:text-[2.5rem]  lg:font-extrabold text-white  leading-[3.2rem] animate__animated animate__backInDown `}
          >
            Get everyone on the same page
          </h4>
          <h6 className="text-slate-100 text-2xl w-2/3">
            Trakk is a simple, powerful way to manage your team&apos;s schedule,
            spend less time on the schedule and more time on what you love.
          </h6>
          <div className="flex  gap-2">
            {" "}
            <Button
              onClick={handleGetStarted}
              className=" cursor-pointer text-white px-8 md:text-lg py-2 rounded bg-[#1A7DE5] hover:bg-[#5a95d4]"
            >
              Staff Login
            </Button>
            <Button className="bg-white cursor-pointer text-black  px-8 rounded md:text-lg py-2  hover:bg-zinc-200">
              Admin Login
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className=" md:text-[2rem] font-extrabold">
          Features that makes your life easier
        </h1>
        <div className="">
          <FeaturesLanding />
        </div>
      </div>
      <div className="flex flex-col my-20 gap-10">
        <h1 className=" md:text-xl font-extrabold">
          Hear what our customers say
        </h1>
        <TestimonialLandingPage />
      </div>
    </div>
  );
}
