import { service3 } from "../../../assets";

import ServiceIconsList from "./ServiceIconsList";
import {
  VideoBar,
  VideoChatMessage,
} from "../../../components/design/Services";

const ServiceVideoGeneration = () => {
  return (
    <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
      <div className="py-12 px-4 xl:px-8">
        <h4 className="h4 mb-4">Video generation</h4>
        <p className="body-2 mb-[2rem] text-n-3">
          The world’s most powerful AI photo and video art generation engine.
          What will you create?
        </p>
        <ServiceIconsList />
      </div>
      <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
        <img
          src={service3}
          className="w-full h-full object-cover"
          width={520}
          height={400}
          alt="AI-generated video interface preview"
          loading="lazy"
        />
        <VideoChatMessage />
        <VideoBar />
      </div>
    </div>
  );
};

export default ServiceVideoGeneration;
