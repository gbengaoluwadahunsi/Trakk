import { Poller_One } from "next/font/google";

export const poller_one = Poller_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});


const AdminHeader = () => {
    return (
      <header className="bg-blue-700 text-white p-4 flex fixed w-full justify-between items-center">
       <span
          className={` text-2xl md:text-4xl font-mono font-extrabold w-screen ${poller_one.className} text-zinc-200  `}
        >
          Trakk
        </span>
        <button className="bg-red-500 px-4 py-2 rounded">Logout</button>
      </header>
    );
  };
  
  export default AdminHeader;
  