import Section from "../../components/Section";
import { BottomLine } from "../../components/design/Hero";
import { useRef } from "react";
import CompanyLogos from "../Logos/CompanyLogos";

import HeroContent from "./components/HeroContent";
import HeroVisuals from "./components/HeroVisuals";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      id="hero"
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      aria-label="Hero section"
    >
      <div className="container relative" ref={parallaxRef}>
        <HeroContent />
        <HeroVisuals />
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
