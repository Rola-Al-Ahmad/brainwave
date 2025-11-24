import { memo } from "react";
import ClipPath from "../../../assets/svg/ClipPath";
import { GradientLight } from "../../../components/design/Benefits";
import Arrow from "../../../assets/svg/Arrow";
import CardBg from "./CardBg";

const BenefitCard = ({ benefit }) => {
  return (
    <li
      role="listitem"
      key={benefit.id}
      className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
      style={{ backgroundImage: `url(${benefit.backgroundUrl})` }}
      aria-labelledby={`benefit-title-${benefit.id}`}
    >
      <div
        className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]
                            pointer-events-none"
      >
        <h5 className="h5 mb-5" id={`benefit-title-${benefit.id}`}>
          {benefit.title}
        </h5>
        <p className="body-2 mb-6 text-n-3">{benefit.text}</p>
        <div className="flex items-center mt-auto">
          <img
            src={benefit.iconUrl}
            width={48}
            height={48}
            alt={`${benefit.title} feature icon`}
            loading="lazy"
          />
          <p
            aria-hidden="true"
            className="ml-auto text-xs font-bold text-n-1 uppercase
                                    font-code tracking-wider"
          >
            Explore more
          </p>
          <Arrow />
        </div>
      </div>

      {benefit.light && <GradientLight />}

      <CardBg benefit={benefit} />
      <ClipPath />
    </li>
  );
};

export default memo(BenefitCard);
