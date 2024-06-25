import Image from "next/image";
import TestimonalLandingPage from "./TestimonalLandingPage";
import { FaStar } from "react-icons/fa";

interface TestimonialCardProps {
  image: string;
  date: string;
  description: string;
  name: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  name,
  date,
  description,
}) => {
  const handlePlayAudio = () => {
    const utterance = new SpeechSynthesisUtterance(description);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="border-2 p-4 py-6 border-slate-800 rounded-lg ">
      <div className="flex items-center gap-4">
        <Image
          className="rounded-full bg-white"
          src={image}
          alt="Login page image"
          width={100}
          height={200}
  
        />
        <div>
          {" "}
          <h4 className="font-bold">{name}</h4>
          <h6 className="text-sm">{date}</h6>
        </div>
      </div>

      <div></div>
      <div>
        <div className="flex mt-2">
          <FaStar className="text-slate-800" />
          <FaStar className="text-slate-800" />
          <FaStar className="text-slate-800" />
          <FaStar className="text-slate-800" />
          <FaStar className="text-slate-800" />
        </div>
        <p className=" mt-2 text-[#495765]">{description}</p>
        <button  className= "testimonial-card bg-[#1A7DE5] hover:bg-[#5a95d4]" onClick={handlePlayAudio}>🔊 Listen</button>
      </div>
    </div>
  );
};

export default TestimonialCard;
