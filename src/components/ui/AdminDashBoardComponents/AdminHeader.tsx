import { useRouter } from "next/navigation";




const AdminHeader = () => {

  const router = useRouter();
  const handleLogOut = () => {
    router.push("/")
  }
    return (
      <header className=" text-white p-4 flex justify-between fixed w-[100%] z-50 bg-[#0000ff] rounded-t-lg  items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button onClick={handleLogOut} className="bg-red-500 px-4 py-2 rounded">Logout</button>
      </header>
    );
  };
  
  export default AdminHeader;
  