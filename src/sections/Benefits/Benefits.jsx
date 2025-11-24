import { benefits } from "../../constants";

import Heading from "../../components/Heading";
import Section from "../../components/Section";

import BenefitCard from "./components/BenefitCard";

const Benefits = () => {
  return (
    <Section id="features" aria-label="Brainwave app features and benefits">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <ul
          className="flex flex-wrap gap-10 mb-10 justify-center"
          role="list"
          aria-label="List of Brainwave AI benefits"
        >
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Benefits;
