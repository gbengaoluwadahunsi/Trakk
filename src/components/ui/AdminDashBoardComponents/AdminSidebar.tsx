import { FC } from "react";
import Dashboard from '../../../app/admin/dashboard/page';

interface AdminSidebarProps {
  setSection: (section: string) => void;
}

const AdminSidebar: FC<AdminSidebarProps> = ({ setSection }) => {
  return (
    <div className="w-64 bg-gray-800 fixed text-white h-screen  mt-[4.4em] p-4">
      <nav>
        <ul className="space-y-10 text-xl">
          <li onClick={() => setSection("overview")} className="cursor-pointer my-2 bg-gray-600 shadow-lg rounded-lg w-[10rem] p-2">Dashboard</li>
          <li onClick={() => setSection("employees")} className="cursor-pointer my-2  bg-gray-600 shadow-lg rounded-lg w-[10rem] p-2">Employees</li>
          <li onClick={() => setSection("tasks")} className="cursor-pointer my-2  bg-gray-600 shadow-lg rounded-lg w-[10rem] p-2">Tasks</li>
          <li onClick={() => setSection("company")} className="cursor-pointer my-2  bg-gray-600 shadow-lg rounded-lg w-[10rem] p-2">Company</li>
          <li onClick={() => setSection("reports")} className="cursor-pointer my-2  bg-gray-600 shadow-lg rounded-lg w-[10rem] p-2">Reports</li>
          <li onClick={() => setSection("notifications")} className="cursor-pointer my-2  bg-gray-600 shadow-lg rounded-lg w-[10rem] p-2">Notifications</li>
          <li onClick={() => setSection("settings")} className="cursor-pointer my-2  bg-gray-600 shadow-lg rounded-lg w-[10rem] p-2">Settings</li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
