import { useRouter } from "next/navigation";




const AdminHeader = () => {

  const router = useRouter();
  const handleLogOut = () => {
    router.push("/")
  }

  // Get the current date and time
  const displayDate = new Date()

// Array of day names
  const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


 // Get the current hour, minute, and second
 let hour = displayDate.getHours();
 let minute = displayDate.getMinutes();
 let second =displayDate.getSeconds();

 // Determine if it's AM or PM
 let timeoFTheDay = (hour >= 12) ? "PM" :  "AM"

// Convert 24-hour format to 12-hour format
 hour = (hour >= 12)? hour - 12: hour;

 // Check for special cases when hour is 0
 if (hour === 0 && timeoFTheDay === 'PM'){
  if (minute === 0 && second === 0){

    hour = 12;
    timeoFTheDay = 'Noon'
  }else{
    hour = 12;
    timeoFTheDay = 'PM'
  }
 }

 // Check for special cases when hour is 0
 if (hour === 0 && timeoFTheDay === 'AM'){
  if (minute === 0 && second === 0) {
    hour = 12;
    timeoFTheDay = 'Midnight';
  }else{
    hour = 12;
    timeoFTheDay = 'AM';
  }
  
 }
 
//Format the time to have  double digits for minutes
let aje = minute <= 9 ? `0${minute}` : minute






    return (
      <header className=" text-white p-6 flex justify-between  bg-[#0006df]  w-[100%] items-center">
        <div className="flex flex-col">
        <h2 className=" font-bold">{ daylist[displayDate.getDay()]  + ", "+ " June "  +  displayDate.getDate() }</h2>
        <span className="  text-[#c9c9db] ">{"Current Time: " + hour + ":"+  aje + " " + timeoFTheDay}</span>
        </div>
        <span> Trial days left : 14 </span>
        <button onClick={handleLogOut} className="bg-red-500 px-4 py-2 rounded">Logout</button>
      </header>
    );
  };
  
  export default AdminHeader;
  