import Image from "next/image";
import { Fa3, FaCalendarCheck, FaClock, FaMessage, FaList} from "react-icons/fa6";
import { IconType } from "react-icons";


interface StartTrialCardProps {
    icon: string;
    text: string;
    description: string;
}

const StartTrialCard: React.FC<StartTrialCardProps> = ({ icon, text, description }) => {
  // Create a mapping for icon components
  const iconMapping: { [key: string]: IconType } = {
    FaCalendarCheck: FaCalendarCheck,
    Fa3: Fa3,
    FaClock: FaClock,
    FaMessage: FaMessage,
    FaList: FaList,
  };

  // Get the icon component based on the key
  const IconComponent = iconMapping[icon];

  return (
    <div className="border-2 border-slate-800 rounded-lg my-2 p-8">
      {IconComponent && <IconComponent className="text-blue-500 text-3xl" />}
      <h4 className="mt-4 font-extrabold">{text}</h4>
      <p className="w-[90%] text-[#657686]">{description}</p>
    </div>
  );
};

export default StartTrialCard;
