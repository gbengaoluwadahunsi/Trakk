import Image from "next/image";
import FeaturesLanding from './FeaturesLanding';



interface FeatureCardProps  {
    image: string;
    text: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, text, description }) => {
  return (
    <div>
      <Image
      className="rounded-lg"
        src={image}
        alt="Login page image"
        objectFit="contain"
        width={250}
        height={50}
        // placeholder="blur"
      />
      <h4 className="mt-4 font-extrabold">{text}</h4>
      <p className="w-[90%] text-[#495765]">{description}</p>
    </div>
  );
};

export default FeatureCard;
