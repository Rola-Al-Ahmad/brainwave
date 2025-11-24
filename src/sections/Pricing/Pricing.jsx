import Section from "../../components/Section";
import PricingHeroVisuals from "./components/PricingHeroVisuals";
import PricingContent from "./components/PricingContent";

const Pricing = () => {
  return (
    <Section
      id="pricing"
      className="overflow-hidden"
      aria-label="Pricing section"
    >
      <div className="container relative z-2">
        <PricingHeroVisuals />
        <PricingContent />
      </div>
    </Section>
  );
};

export default Pricing;
