// src/components/Recommendations.tsx
import React from 'react';

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
    <div>
      <h2 className="text-xl text-blue-800 font-bold mb-2">Recommended for You</h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index} className="mb-2 p-2 border rounded">
            <h3 className="font-bold">{rec.title}</h3>
            <p>{rec.description}</p>
            <a href={rec.link} target="_blank" className="text-blue-500 underline">
              Learn more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
