import Section from "../../components/Section";
import CollaborationContent from "./components/CollaborationContent";
import CollaborationAppsRing from "./components/CollaborationAppsRing";

const Collaboration = () => {
  return (
    <Section crosses aria-label="AI collaboration features section">
      <div className="container lg:flex">
        <CollaborationContent />
        <CollaborationAppsRing />
      </div>
    </Section>
  );
};

export default Collaboration;
