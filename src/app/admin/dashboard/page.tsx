"use client";

import { useEffect, useState } from "react";
import AdminSidebar from "../../../components/ui/AdminDashBoardComponents/AdminSidebar";
import AdminHeader from "../../../components/ui/AdminDashBoardComponents/AdminHeader";
import OverviewCard from "../../../components/ui/AdminDashBoardComponents/OverviewCard";
import EmployeeTable from "../../../components/ui/AdminDashBoardComponents/EmployeeTable";
import TaskTable from "../../../components/ui/AdminDashBoardComponents/TaskTable";
import CompanyManagement from "../../../components/ui/AdminDashBoardComponents/CompanyManagement";
import Reports from "../../../components/ui/AdminDashBoardComponents/Reports";
import Notifications from "../../../components/ui/AdminDashBoardComponents/Notifications";
import Settings from "../../../components/ui/AdminDashBoardComponents/Settings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [section, setSection] = useState<string>("overview");

  useEffect(() => {
    toast.success("Welcome to the Admin Dashboard!");
    return () => {
      toast.dismiss();
    };
  }, []);

  return (
    <div className="">
      <AdminHeader />
        
      <div className="flex ">
      <AdminSidebar setSection={setSection} />
      <div className="flex-1 ml-[16rem]  bg-[#F5F5F5] rounded-lg">
      
        

        <div className=" mt-20 p-4 h-screen">
          {section === "overview" && <OverviewCard />}
          {section === "employees" && <EmployeeTable />}
          {section === "tasks" && <TaskTable />}
          {section === "company" && <CompanyManagement />}
          {section === "reports" && <Reports />}
          {section === "notifications" && <Notifications />}
          {section === "settings" && <Settings />}
        </div>
      </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
