'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import TaskList from '../../../components/ui/dashboardComponents/TaskList';
import Recommendations from '../../../components/ui/dashboardComponents/Recommendations';
import AttendanceRecord from '../../../components/ui/dashboardComponents/AttendanceRecord';
import NotificationList from '../../../components/ui/dashboardComponents/NotificationList';
import MessageList from '../../../components/ui/dashboardComponents/MessageList';
import TeamOverview from '../../../components/ui/dashboardComponents/TeamOverview';
import CompanyAnnouncements from '../../../components/ui/dashboardComponents/CompanyAnnouncements';
import LineChart from '../../../components/ui/dashboardComponents/Linechart';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [location, setLocation] = useState<LocationState>({ latitude: null, longitude: null });
  const [clockRecords, setClockRecords] = useState<ClockRecord[]>([]);
  const [currentClockIn, setCurrentClockIn] = useState<string | null>(null);
  const router = useRouter();
  const notify = () => toast.success("Logout Successful!");
  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      err => {
        console.error('Error fetching location:', err);
      }
    );
    return () => {
      setLocation({ latitude: null, longitude: null });
    }
  }, []);

  const handleClockIn = () => {
    const now = new Date().toLocaleString();
    setCurrentClockIn(now);
    setClockRecords(prevRecords => [
      ...prevRecords,
      { date: now.split(', ')[0], clockIn: now, clockOut: null },
    ]);
  };

  const handleClockOut = () => {
    const now = new Date().toLocaleString();
    setCurrentClockIn(null);
    setClockRecords(prevRecords =>
      prevRecords.map(record =>
        record.clockOut === null ? { ...record, clockOut: now } : record
      )
    );
  };

 
  const handleLogout = () => {
    if (confirm('Do you really want to logout?')) {
      notify();
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  };


  const placeholderPerformanceData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Efficiency',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const placeholderTasks = [
    { title: 'Task 1', description: 'Complete the report', dueDate: '2024-06-01' },
    { title: 'Task 2', description: 'Attend team meeting', dueDate: '2024-06-02' },
  ];

  const placeholderRecommendations = [
    { title: 'Book: Deep Work', description: 'Improve focus and productivity', link: '#' },
    { title: 'Podcast: Developer Tea', description: 'Tips for software developers', link: '#' },
  ];

  const placeholderAttendance = [
    { date: '2024-05-20', status: 'Present' },
    { date: '2024-05-21', status: 'Present' },
  ];

  const placeholderNotifications = [
    { message: 'New task assigned to you', date: '2024-05-30' },
    { message: 'Company meeting at 3 PM', date: '2024-05-29' },
  ];

  const placeholderMessages = [
    { sender: 'Manager', content: 'Please update the report.', date: '2024-05-28' },
    { sender: 'Colleague', content: 'Can you help with this task?', date: '2024-05-27' },
  ];

  const placeholderTeam = [
    { name: 'John Doe', role: 'Manager' },
    { name: 'Jane Smith', role: 'Developer' },
  ];

  const placeholderAnnouncements = [
    { message: 'Office will be closed on Friday', date: '2024-05-26' },
    { message: 'New project starting next week', date: '2024-05-25' },
  ];

  return (
    <div className="flex flex-col h-screen p-6 bg-gradient-to-br from-blue-600 to-blue-800">
      <h1 className="text-4xl font-bold mb-8 text-center text-slate-900">Welcome back, James Bond</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Performance Metrics */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Performance Metrics</h2>
          <div className="h-64">
            <LineChart data={placeholderPerformanceData} />
          </div>
        </div>

        {/* Task List */}
        <div className="col-span-1 mb-8 p-6 bg-white rounded-lg shadow-lg">
          <TaskList tasks={placeholderTasks} />
        </div>

        {/* Attendance Record */}
        <div className="col-span-1 mb-8 p-6 bg-white rounded-lg shadow-lg">
          <AttendanceRecord attendance={placeholderAttendance} />
        </div>

        {/* Recommendations */}
        <div className="col-span-1 mb-8 p-6 bg-white rounded-lg shadow-lg">
          <Recommendations recommendations={placeholderRecommendations} />
        </div>

        {/* Notifications */}
        <div className="col-span-1 mb-8 p-6 bg-white rounded-lg shadow-lg">
          <NotificationList notifications={placeholderNotifications} />
        </div>

        {/* Messages */}
        <div className="col-span-1 mb-8 p-6 bg-white rounded-lg shadow-lg">
          <MessageList messages={placeholderMessages} />
        </div>

        {/* Team Overview */}
        <div className="col-span-1 mb-8 p-6 bg-white rounded-lg shadow-lg">
          <TeamOverview team={placeholderTeam} />
        </div>

        {/* Company Announcements */}
        <div className="col-span-1 mb-8 p-6 bg-white rounded-lg shadow-lg">
          <CompanyAnnouncements announcements={placeholderAnnouncements} />
        </div>

        {/* Clock In/Out */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Clock In/Out</h2>
          {currentClockIn ? (
            <div>
              <p className="text-lg">Clocked in at: {currentClockIn}</p>
              <button
                onClick={handleClockOut}
                className="mt-4 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
              >
                Clock Out
              </button>
            </div>
          ) : (
            <button
              onClick={handleClockIn}
              className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Clock In
            </button>
          )}
          <div className="mt-4">
            <h3 className="text-xl font-bold text-blue-800">Clock Records</h3>
            <ul className="list-disc pl-5">
              {clockRecords.map((record, index) => (
                <li key={index} className="text-lg">
                  {record.date} - Clock In: {record.clockIn}, Clock Out: {record.clockOut || 'N/A'}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Location */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 mb-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-slate-700">Current Location</h2>
          {location.latitude && location.longitude ? (
            <p className="text-lg">
              Latitude: {location.latitude}, Longitude: {location.longitude}
            </p>
          ) : (
            <p className="text-lg">Loading location...</p>
          )}
        </div>

        {/* Settings */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-slate-700">Settings</h2>
          <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
            Logout
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
