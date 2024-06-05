// src/components/AttendanceRecord.tsx
import React from 'react';

interface Attendance{
  status: string;
  date: string;
}


interface CompanyAnnouncementsProps {
  attendance: Attendance[];
}

const AttendanceRecord: React.FC<CompanyAnnouncementsProps> = ({attendance }) => {
  return (
    <div>
      <h2 className="text-xl text-blue-800 font-bold mb-2">Attendance Record</h2>
      <ul>
        {attendance.map((record, index) => (
          <li key={index} className="mb-2 p-2 border rounded">
            <p>{record.date}: {record.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceRecord;
