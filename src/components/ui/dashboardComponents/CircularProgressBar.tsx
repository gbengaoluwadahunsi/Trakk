import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  percentage: number;
  title: string;
};

const CircularProgressBar: React.FC<Props> = ({ percentage, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-16 h-16 mb-2">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "#0006df",
            pathColor: "#16a34a",
            trailColor: "#b2bbff",
          })}
        />
      </div>
      <h3 className="text-lg font-extrabold">{title}</h3>
    </div>
  );
};

export default CircularProgressBar;
