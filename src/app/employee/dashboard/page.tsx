"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TaskList from "../../../components/ui/dashboardComponents/TaskList";
import Recommendations from "../../../components/ui/dashboardComponents/Recommendations";
import AttendanceRecord from "../../../components/ui/dashboardComponents/AttendanceRecord";
import NotificationList from "../../../components/ui/dashboardComponents/NotificationList";
import MessageList from "../../../components/ui/dashboardComponents/MessageList";
import TeamOverview from "../../../components/ui/dashboardComponents/TeamOverview";
import CompanyAnnouncements from "../../../components/ui/dashboardComponents/CompanyAnnouncements";
import CircularProgressBar from "../../../components/ui/dashboardComponents/CircularProgressBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaRegClock,
  FaCalendarAlt,
  FaSun,
  FaMoon,
  FaLink,
  FaCheckCircle,
} from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdLocationOff, MdLocationOn } from "react-icons/md";

import { FaCircleUser } from "react-icons/fa6";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type LocationState = {
  latitude: number | null;
  longitude: number | null;
};

type ClockRecord = {
  date: string;
  clockIn: string;
  clockOut: string | null;
};

const EmployeeDashboard: React.FC = () => {
  const [location, setLocation] = useState<LocationState>({
    latitude: null,
    longitude: null,
  });
  const [clockRecords, setClockRecords] = useState<ClockRecord[]>([]);
  const [currentClockIn, setCurrentClockIn] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [revealLocation, setRevealLocation] = useState(false);
  const router = useRouter();
  const notify = () => toast.success("Logout Successful!");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        console.error("Error fetching location:", err);
      }
    );
    setLoading(false);
    return () => {
      setLocation({ latitude: null, longitude: null });
    };
  }, []);

  const handleClockIn = () => {
    const now = new Date().toLocaleString();
    setCurrentClockIn(now);
    setClockRecords((prevRecords) => [
      ...prevRecords,
      { date: now.split(", ")[0], clockIn: now, clockOut: null },
    ]);
  };

  const handleClockOut = () => {
    const now = new Date().toLocaleString();
    setCurrentClockIn(null);
    setClockRecords((prevRecords) =>
      prevRecords.map((record) =>
        record.clockOut === null ? { ...record, clockOut: now } : record
      )
    );
  };

  const handleLogout = () => {
    if (confirm("Do you really want to logout?")) {
      notify();
      setTimeout(() => {
        router.push("/");
      }, 800);
    }
  };

  const handleLocationToggle = () => {
    setRevealLocation(!revealLocation);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const placeholderPerformanceData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Efficiency",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const placeholderTasks = [
    {
      title: "Task 1",
      description: "Complete the report",
      dueDate: "2024-06-01",
    },
    {
      title: "Task 2",
      description: "Attend team meeting",
      dueDate: "2024-06-02",
    },
  ];

  const placeholderRecommendations = [
    {
      title: "Book: Deep Work",
      description: "Improve focus and productivity",
      link: "#",
    },
    {
      title: "Podcast: Developer Tea",
      description: "Tips for software developers",
      link: "#",
    },
  ];

  const placeholderAttendance = [
    { date: "2024-05-20", status: "Present" },
    { date: "2024-05-21", status: "Present" },
  ];

  const placeholderNotifications = [
    { message: "New task assigned to you", date: "2024-05-30" },
    { message: "Company meeting at 3 PM", date: "2024-05-29" },
  ];

  const placeholderMessages = [
    {
      sender: "Manager",
      content: "Please update the report.",
      date: "2024-05-28",
    },
    {
      sender: "Colleague",
      content: "Can you help with this task?",
      date: "2024-05-27",
    },
  ];

  const placeholderTeam = [
    { name: "John Doe", role: "Manager" },
    { name: "Jane Smith", role: "Developer" },
  ];

  const placeholderAnnouncements = [
    { message: "Office will be closed on Friday", date: "2024-05-26" },
    { message: "New project starting next week", date: "2024-05-25" },
  ];

  const placeholderLinks = [
    { name: "Google", url: "https://www.google.com" },
    { name: "GitHub", url: "https://www.github.com" },
  ];

  return (
    <div
      className={` font-serif     flex flex-col p-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#eeefff] text-[#00000f]"
      }`}
    >
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-start space-x-4">
          <FaCircleUser size={40} />
          <div>
            <h1 className="text-2xl font-bold">James Bond</h1>
            <p className="text-md text-[#00047a]">Secret Agent</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white h-10 px-4 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
          <button className="text-blue-500 hover:underline mt-1">
            Edit Profile
          </button>
          <button
            onClick={handleToggleDarkMode}
            className="bg-gray-700 text-white h-10 px-4 rounded-lg hover:bg-gray-800"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Performance Metrics */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-8 p-6 bg-[#2040ff] rounded-lg shadow-lg">
          <h2 className="text-2xl font-extrabold mb-4 flex items-center text-white">
            <GrDocumentPerformance className="mr-2" /> Performance Metrics
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {/* Efficiency */}
            <div className="flex  items-center justify-around bg-white rounded-lg px-4 py-8 ">
              <h3 className="text-xl font-bold text-[#0006df] ">Efficiency</h3>
              <CircularProgressBar percentage={75} title={""} />
            </div>
            {/* Task Completion Rate */}
            <div className="flex  items-center justify-around bg-white rounded-lg  px-4 py-8 ">
              <h3 className="text-xl font-bold  text-[#0006df] ">
                Task Completion Rate
              </h3>
              <CircularProgressBar percentage={75} title={""} />
            </div>
            {/* Attendance */}
            <div className="flex  items-center justify-around bg-white rounded-lg  px-4 py-8 ">
              <h3 className="text-xl font-bold  text-[#0006df] ">
                {" "}
                Last Attendance
              </h3>
              <p className="text-4xl text-green-600 font-bold ">
                <FaCheckCircle />
              </p>
            </div>
            {/* Feedback */}
            <div className="flex  items-center justify-around bg-white rounded-lg px-4 py-8 ">
              <h3 className="text-xl  font-bold  text-[#0006df] ">Feedback</h3>
              <p className="text-xl font-bold text-black ">4.5/5</p>
            </div>
          </div>
        </div>

        {/* Task List */}
        <div className="col-span-1 mb-8  bg-[#b2bbff] rounded-lg shadow-lg">
          <TaskList tasks={placeholderTasks} />
        </div>

        {/* Attendance Record */}
        <div className=" bg-[#b2bbff] col-span-1 mb-8  rounded-lg shadow-lg">
          <AttendanceRecord attendance={placeholderAttendance} />
        </div>

        {/* Recommendations */}
        <div className="col-span-1 mb-8 bg-[#b2bbff] rounded-lg shadow-lg">
          <Recommendations recommendations={placeholderRecommendations} />
        </div>

        {/* Notifications */}
        <div className="col-span-1 mb-8  bg-[#b2bbff] rounded-lg shadow-lg">
          <NotificationList notifications={placeholderNotifications} />
        </div>

        {/* Messages */}
        <div className="col-span-1 mb-8  bg-[#b2bbff] rounded-lg shadow-lg">
          <MessageList messages={placeholderMessages} />
        </div>

        {/* Team Overview */}
        <div className="col-span-1 mb-8  bg-[#b2bbff] rounded-lg shadow-lg">
          <TeamOverview team={placeholderTeam} />
        </div>

        {/* Company Announcements */}
        <div className="col-span-1 mb-8  bg-[#b2bbff] rounded-lg shadow-lg">
          <CompanyAnnouncements announcements={placeholderAnnouncements} />
        </div>

        {/* Calendar */}
        <div
          className={` ${
            darkMode ? "text-black" : ""
          }  flex mb-8  bg-[#b2bbff] rounded-lg shadow-lg`}
        >
          <div className="relative h-[10em] w-2 bg-[#0006df] rounded-l-md ">
            <div className="absolute "></div>
          </div>
          <div className="p-6 ">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaCalendarAlt className="mr-2" /> Calendar
            </h2>
            <Calendar className="react-calendar" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex  mb-8 bg-[#b2bbff] rounded-lg shadow-lg">
          <div className="relative h-[10em] w-2 bg-[#0006df] rounded-l-md ">
            <div className="absolute "></div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaLink className="mr-2" /> Quick Links
            </h2>
            <ul>
              {placeholderLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00047a] hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Clock In/Out */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-8 p-6 bg-[#2b2c35] rounded-lg flex justify-between shadow-lg text-white">
          <div className="">
            {currentClockIn ? (
              <div>
                <p className="text-lg">Clocked in at: {currentClockIn}</p>
                <button
                  onClick={handleClockOut}
                  className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 flex items-center"
                >
                  <FaRegClock className="mr-2" /> Clock Out
                </button>
              </div>
            ) : (
              <button
                onClick={handleClockIn}
                className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 flex items-center"
              >
                <FaRegClock className="mr-2" /> Clock In
              </button>
            )}
            <div className="mt-4">
              <h3 className="text-xl font-bold">Clock Records</h3>
              <table className="min-w-full bg-[#3a3b45] rounded">
                <thead>
                  <tr className="bg-[#2b2c35]">
                    <th className="text-left  py-2">Date</th>
                    <th className="text-left px-4 py-2">Clock In Time</th>
                    <th className="text-left px-4 py-2">Clock Out Time</th>
                  </tr>
                </thead>
                <tbody>
                  {clockRecords.map((record, index) => (
                    <tr
                      key={index}
                      className="bg-[#3a3b45]  border-b border-[#2b2c35]"
                    >
                      <td className="px-4 py-2">{record.date}</td>
                      <td className="px-4 py-2">{record.clockIn}</td>
                      <td className="px-4 py-2">{record.clockOut || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Location */}
          <div className=" w-[1/3] flex flex-col gap-4">
            <div>
              <h2 className="  font-bold mb-4">Current Location</h2>
              <span>
                {revealLocation && location.latitude && location.longitude ? (
                  <p className="text-lg flex items-center gap-2">
                    {" "}
                    <MdLocationOn />
                    <span>
                      {" "}
                      Latitude: {location.latitude}, Longitude:{" "}
                      {location.longitude}
                    </span>
                  </p>
                ) : (
                  <span></span>
                )}
              </span>
            </div>
            <button
              onClick={handleLocationToggle}
              className=" bg-[#0006df] w-[1/3] rounded-lg p-2"
            >
              {" "}
              {revealLocation ? "Hide Location" : "Reveal location"}{" "}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EmployeeDashboard;
