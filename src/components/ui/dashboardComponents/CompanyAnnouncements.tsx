import {  MdAnnouncement } from "react-icons/md";

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
    <div className='flex'>
      <div className='relative h-[10em] w-2 bg-[#0006df] rounded-l-md '>
        <div className='absolute '></div>
      </div>

      <div className='p-6  w-full'>
      <h2 className="text-xl font-bold mb-4 flex items-center">
            <MdAnnouncement className="mr-2" /> Company Announcements
          </h2>
          <ul>
        {announcements.map((announcement, index) => (
          <li key={index} className="mb-2 p-2 border rounded">
            <p>{announcement.message}</p>
            <p className="text-sm text-[#00047a]">{announcement.date}</p>
          </li>
        ))}
      </ul>

      </div>
     
      
    </div>
  );
};

export default CompanyAnnouncements;
