
import React from 'react';
import { FaTasks} from "react-icons/fa";

interface Recommendation{
  title : string;
  description: string;
  link: string;
}

interface RecommendationProps{
  recommendations : Recommendation[];
}

const Recommendations: React.FC<RecommendationProps> = ({ recommendations }) => {
  return (
    <div className='flex'>
      <div className='relative h-[10em] w-2 bg-[#0006df] rounded-l-md '>
        <div className='absolute '></div>
      </div>

      <div className='p-6  w-full'>
      <h2 className=" flex items-center text-xl font-bold mb-2">
            <FaTasks className="mr-2" /> Recommendations
          </h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index} className="mb-2 p-2 border rounded">
            <h3 className="font-bold">{rec.title}</h3>
            <p>{rec.description}</p>
            <a href={rec.link} target="_blank" className="text-[#00047a] underline">
              Learn more
            </a>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Recommendations;
