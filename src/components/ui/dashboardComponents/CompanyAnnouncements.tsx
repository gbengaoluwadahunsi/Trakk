// src/components/CompanyAnnouncements.tsx
import React from 'react';

// Define the type for the announcements object
interface Announcement {
  message: string;
  date: string;
}


interface CompanyAnnouncementsProps {
  announcements: Announcement[];
}

const CompanyAnnouncements: React.FC<CompanyAnnouncementsProps> = ({ announcements }) => {
  return (
    <div>
      <h2 className="text-xl text-blue-800 font-bold mb-2">Company Announcements</h2>
      <ul>
        {announcements.map((announcement, index) => (
          <li key={index} className="mb-2 p-2 border rounded">
            <p>{announcement.message}</p>
            <p className="text-sm text-gray-500">{announcement.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyAnnouncements;
