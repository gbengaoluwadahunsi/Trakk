import TestimonialCard from "./TestimonalCard"
import testimonialeData from "./testimonialData"


const TestimonialLandingPage = () => {
  return (
    <div className="grid grid-cols-4 gap-10  ">{testimonialeData.map((card, index) =>
    <TestimonialCard  key = {index} image={card.image} date={card.date} description={card.description} name = {card.name}/>
    )}</div>
  )
}

export default TestimonialLandingPage