import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Section from "../../components/Section";
import { roadmap } from "../../constants";
import { Gradient } from "../../components/design/Roadmap";
import RoadmapItemCard from "./components/RoadmapItemCard";

const Roadmap = () => (
  <Section
    className="overflow-hidden"
    id="roadmap"
    aria-label="Roadmap section"
  >
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we’re working on" />

      <ul
        role="list"
        className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]"
      >
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return <RoadmapItemCard key={item.id} item={item} status={status} />;
        })}

        <Gradient />
      </ul>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap" ariaLabel="Learn more about our roadmap">
          Our roadmap
        </Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
