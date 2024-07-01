"use client";
import Home from "../components/ui/landingPageUI/Home";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";



function Page() {
  return (
    <main className="min-h-screen max-w-[1600px] mx-auto flex bg-slate-50 flex-col text-[#121417]">
      <Header />
      <Home />
      <Footer />
    </main>
  );
}

export default Page;
