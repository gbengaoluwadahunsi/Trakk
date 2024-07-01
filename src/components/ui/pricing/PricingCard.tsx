import {Button} from "@/components/ui/button"
import { FaCheck } from 'react-icons/fa';


interface PricingCardProps {
    name: string;
    price: number; // in dollars
    features: string[];
  }

  // Example data for the pricing cards

const PricingCard: React.FC<PricingCardProps> = ({ name, price,features }) => {
  return (
    <div className=" flex flex-col gap-4 border-2 border-slate-400  h-[28rem] rounded-lg p-10 cursor-pointer hover:scale-y-110 hover:border-blue-800">
        <span className="font-bold text-slate-900 text-lg ">{name}</span>
        <h4 className="font-bold"><span className="font-bold text-slate-900 text-5xl">${price}</span>/user/month</h4>
        <Button className="w-full bg-slate-200 text-black  hover:text-white">Select</Button>
       <div>
    
        <div className="flex flex-col gap-10">
     <ul className="list-none flex flex-col gap-4">
        {features.map((feature, index) => (
          <div className="flex  items-center gap-4" key={index}>
             <FaCheck/> <li >  {feature}</li>
          </div>
     ))}
     </ul>
     </div>
       </div>

    </div>
  )
}

export default PricingCard