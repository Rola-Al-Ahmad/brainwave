import { smallSphere, stars } from "../../../assets";

const PricingHeroVisuals = () => {
  return (
    <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
      <img
        src={smallSphere}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="relative z-1"
        width={255}
        height={255}
      />
      <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <img
          src={stars}
          alt=""
          loading="lazy"
          aria-hidden="true"
          className="w-full"
          width={950}
          height={400}
        />
      </div>
    </div>
  );
};

export default PricingHeroVisuals;
