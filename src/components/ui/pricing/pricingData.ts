interface PricingData {
  name: string;
  price: number; // in dollars
  features: string[];
}

const pricingData: PricingData [] = [
  {
  
    name: "Free",
    price: 0,
    features: [
      "Up to 10 users",
      "Basic reports",
      "Bascic scheduling",
      "Basic compliance",
    ],
  },
  {
    
    name: "Starter",
    price: 17.5,
    features: [
      "Unlimited users",
      "Advanced reports",
      "Advance scheduling",
      "Advance compliance",
      "24/7 Support",
    ],
  },
  {
   
    name: "Standard",
    price: 25.0,
    features: [
      "Unlimited users",
      "Advanced reports",
      "Advance scheduling",
      "Advance compliance",
      "renewable credits",
      "24/7 Support",
    ],
  },
];

export default pricingData;
