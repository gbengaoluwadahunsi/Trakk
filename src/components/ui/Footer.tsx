import Image from "next/image";
import  logo from "../../../public/logo.png"

const Footer = () => {
  return (
    <div className=' bg-slate-800 text-slate-100 flex flex-col gap-2 items-center  justify-center py-4  px-8 xl:px-32 '>

<div className="flex  items-center w-full justify-between">
<span className="flex  gap-2">  
        <Image
          src={logo}
          alt="Login page image"
          objectFit="contain"
          width={20}
          height={8}
          
        /><span className="text-[2em] text-black font-serif font-bold ">Trakk</span></span>
        <ul className='list-none flex  justify-between gap-4 basis-3/4'>
        
            <li>About Us</li>
            <li>Contact</li>
            <li>Support</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
        </ul>
</div>
        <ul className='list-none flex mt-8 justify-between gap-4'>
            <li>facebbok</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
        </ul>
          <div className=" text-slate-300 text-xs px-8 xl:px-16">&copy; {new Date().getFullYear()} Trakk labs</div>
    </div>
  )
}

export default Footer