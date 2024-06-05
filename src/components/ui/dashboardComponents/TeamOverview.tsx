import React from 'react';

interface TeamMember {
  name: string;
  role: string;
}

interface TeamOverviewProps {
  team: TeamMember[]; // An array of TeamMember objects
}

const TeamOverview: React.FC<TeamOverviewProps> = ({ team }) => {
  return (
    <div>
      <h2 className="text-xl text-blue-800 font-bold mb-2">Team Members</h2>
      <ul>
        {team.map((member, index) => (
          <li key={index} className="mb-2 p-2 border rounded">
            <h3 className="font-bold">{member.name}</h3>
            <p>{member.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamOverview;
