import Image from "next/image";
import logo from "../../../public/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-slate-800 text-slate-100 flex flex-col gap-2 items-center  justify-center py-4  px-8 xl:px-32 ">
      <div className="flex  items-center w-full justify-between">
        <span className="grid grid-cols-4 items-center ">
          <span className="text-[2em] -ml-2  col-span-3  font-bold ">
            Trakk
          </span>
        </span>
        <ul className="list-none flex  justify-between gap-4 basis-3/4">
          <li>About Us</li>
          <li>Contact</li>
          <li>Support</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <ul className="list-none flex mt-8  text-xl justify-between text-slate-400 gap-4">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
      <div className=" text-slate-300 text-xs px-8 xl:px-16">
        &copy; {new Date().getFullYear()} Trakk labs
      </div>
    </div>
  );
};

export default Footer;
