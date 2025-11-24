import Heading from "../../components/Heading";
import Section from "../../components/Section";
import { Gradient } from "../../components/design/Services";
import ServiceSmartAI from "./components/ServiceSmartAI";
import ServicePhotoEditing from "./components/ServicePhotoEditing";
import ServiceVideoGeneration from "./components/ServiceVideoGeneration";

const Services = () => {
  return (
    <Section id="how-to-use" aria-label="Services section">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-poweres applications"
        />
        <div className="relative">
          <ServiceSmartAI />

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <ServicePhotoEditing />

            <ServiceVideoGeneration />
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
