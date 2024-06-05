import { FC, useState } from "react";
import Image from "next/image";
import logo from "../../../../public/Trakk.png";
import { RxDashboard } from "react-icons/rx";
import { BsFillPeopleFill } from "react-icons/bs";
import { SiGoogletasks } from "react-icons/si"
import { ImOffice } from "react-icons/im";
import { TbReport } from "react-icons/tb";
import { IoNotifications, IoSettingsSharp  } from "react-icons/io5";



interface AdminSidebarProps {
  
  setSection: (section: string) => void;
}

const AdminSidebar: FC<AdminSidebarProps> = ({ setSection }) => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  return (
    <div className="w-64 bg-white fixed shadow-lg shadow-slate-800 text-white h-screen pt-20 px-4">
      <Image
        src={logo}
        alt="Login page image"
        objectFit="cover"
        width={180}
        height={50}
      />
      <nav className="sidebar">
        <ul className="space-y-8 mt-8 text-xl">
          {["overview", "employees", "tasks", "company", "reports", "notifications", "settings"].map((item, index) => (
            <li
              key={item}
              onClick={() => {
                setSection(item);
                setFocusedIndex(index);
              }}
              className={`cursor-pointer my-2 ${
                focusedIndex === index ? "bg-[#0000ff] text-white" : ""
              } text-slate-800 rounded-md w-[10rem] p-2 hover:w-[11rem]`}
            >
              {item === "overview" && (
                <div className="flex items-center justify-start gap-2">
                  <RxDashboard />
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </div>
              )}
              {item === "employees" && (
                <div className="flex items-center justify-start gap-2">
                <BsFillPeopleFill/>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
              )}
              {item === "tasks" && (
                <div className="flex items-center justify-start gap-2">
                <SiGoogletasks />
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
              )}
              {item === "company" && (
                <div className="flex items-center justify-start gap-2">
                <ImOffice  />
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
              )}
              {item === "reports" && (
                <div className="flex items-center justify-start gap-2">
                <TbReport/>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
              )}
              {item === "notifications" && (
                <div className="flex items-center justify-start gap-2">
                <IoNotifications  />
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
              
              )}
              {item === "settings" && (
                <div className="flex items-center justify-start gap-2">
                <IoSettingsSharp  />
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
