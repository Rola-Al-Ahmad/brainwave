import { heroBackground, robot_891W } from "../../../assets";

import { BackgroundCircles, Gradient } from "../../../components/design/Hero";
import Notification from "../../Notification/Notification";
import { ScrollParallax } from "react-just-parallax";
import HeroIconsList from "./HeroIconsList";
import Generating from "../../Generating/Generating";

const HeroVisuals = () => {
  return (
    <div
      aria-hidden="false"
      className="relative max-w-[23rem] mx-auto
                md:max-w-5xl xl:mb-24"
    >
      <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
        <div className="relative bg-n-8 rounded-[1rem]">
          <div
            className="h-[1.4rem] bg-n-10 rounded-t-[0.8rem]"
            aria-hidden="true"
          />
          <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
            <img
              src={robot_891W}
              srcSet={`${robot_891W} 1x, ${robot_891W} 2x`}
              className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
              width={891}
              height={1303}
              alt="Illustration of AI robot representing Brainwave's capabilities"
              loading="eager"
            />
            <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[35rem] md:-translate-x-1/2" />
            <ScrollParallax isAbsolutelyPositioned>
              <HeroIconsList />
            </ScrollParallax>
            <ScrollParallax isAbsolutelyPositioned>
              <Notification
                className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                title="Code generation"
              />
            </ScrollParallax>
          </div>
        </div>
      </div>
      <Gradient />
      <div
        aria-hidden="true"
        className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"
      >
        <img
          src={heroBackground}
          className="w-full"
          width={1440}
          height={1800}
          alt=""
          aria-hidden="true"
          loading="eager"
          // fetchpriority="high"
        />
      </div>
      <BackgroundCircles />
    </div>
  );
};

export default HeroVisuals;
