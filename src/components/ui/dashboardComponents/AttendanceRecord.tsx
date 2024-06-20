// src/components/AttendanceRecord.tsx
import React from 'react';
import { FaTasks, FaRegClock, FaBell, FaEnvelope, FaUsers, FaCalendarAlt, FaSearch, FaSun, FaMoon, FaLink, FaChartLine } from "react-icons/fa";

interface Attendance{
  status: string;
  date: string;
}


interface CompanyAnnouncementsProps {
  attendance: Attendance[];
}

const AttendanceRecord: React.FC<CompanyAnnouncementsProps> = ({attendance }) => {
  return (
    <div className='flex'>
      <div className='relative h-[10em] w-2 bg-[#0006df] rounded-l-md '>
        <div className='absolute '></div>
      </div>
      <div className='p-6  w-full'>
      <h2 className=" flex  items-center text-xl  font-bold mb-2">   <FaRegClock className="mr-2" /> Attendance Record</h2>
      <ul>
        {attendance.map((record, index) => (
          <li key={index} className="mb-2 p-2 text-[#00000f] text-red border border-[#eeefff]">
            <p>{record.date}: {record.status}</p>
          </li>
        ))}
      </ul></div>
      
    </div>
  );
};

export default AttendanceRecord;
