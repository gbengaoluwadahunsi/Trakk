import FeatureCard from "./FeatureCard"
import featureData from "./featureData"

const FeaturesLanding = () => {
  return (
    <div className="grid grid-cols-5  ">{featureData.map((card, index) =>
    <FeatureCard  key = {index} image={card.image} text={card.text} description={card.description}/>
    )}</div>
  )
}

export default FeaturesLanding