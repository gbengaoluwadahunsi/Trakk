import PricingCard from "./PricingCard"
import pricingData from "./pricingData"

const Pricing = () => {
  return (
    <section className="">
      <h1 className=" text-4xl font-bold text-center my-8 items-center justify-center h-full">Simple pricing that scales with your team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-20"> {
        pricingData.map((card, index) =>
          <PricingCard  key={index} name = {card.name} price = {card.price}  features={card.features}/>
         )}
       
        
      </div>
    </section>
  )
}

export default Pricing
