import React from 'react';
import { FaUsers} from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
}

interface TeamOverviewProps {
  team: TeamMember[]; // An array of TeamMember objects
}

const TeamOverview: React.FC<TeamOverviewProps> = ({ team }) => {
  return (
    <div className='flex'>
   <div className='relative h-[10em] w-2 bg-[#0006df] rounded-l-md '>
        <div className='absolute '></div>
      </div>

      <div className='p-6  w-full'>
    <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaUsers className="mr-2" /> Team Overview
          </h2>
      <ul>
        {team.map((member, index) => (
          <li key={index} className="mb-2 p-2 border rounded">
            <h3 className="font-bold">{member.name}</h3>
            <p>{member.role}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default TeamOverview;
