"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
// import jwtDecode from 'jwt-decode';

const EmployeeDashboard = () => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [clockInStatus, setClockInStatus] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Fetch user data from token
    // const token = localStorage.getItem('token');
    // if (token) {
    // //   const decoded = jwtDecode(token);
    // //   setUser(decoded);
    // } else {
    //   router.push('/login');
    // }

    // Fetch tasks
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks', {
          headers: {
            // Authorization: `Bearer ${token}`
          }
        });
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [router]);

  const handleClockIn = async () => {
    // Clock in logic
    setClockInStatus(true);
  };

  const handleClockOut = async () => {
    // Clock out logic
    setClockInStatus(false);
  };

//   if (!user) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome, {"user.name"}</h1>
        <p className="mb-4">Role: {"user.role"}</p>
        <p className="mb-4">Company: {"user.companyName"}</p>

        <div className="mb-4">
          <button
            onClick={clockInStatus ? handleClockOut : handleClockIn}
            className={`px-4 py-2 rounded text-white ${clockInStatus ? 'bg-red-500' : 'bg-green-500'}`}
          >
            {clockInStatus ? 'Clock Out' : 'Clock In'}
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Your Tasks</h2>
          <ul>
            {tasks.map((task) => (
              <li key={"task.id"} className="border p-2 mb-2 rounded">
                <p><strong>{"task.title"}</strong></p>
                <p>Status: {"task.status"}</p>
                <p>Due: {new Date("task.dueDate").toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Performance Metrics</h2>
          {/* Insert performance graphs here */}
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Attendance Record</h2>
          {/* Insert attendance records here */}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
