import { brainwaveSymbol } from "../../../assets";
import { collabApps, collabText } from "../../../constants";
import {
  LeftCurve,
  RightCurve,
} from "../../../components/design/Collaboration";

const CollaborationAppsRing = () => {
  return (
    <div className="lg:ml-auto xl:w-[38rem] mt-4">
      <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
        {collabText}
      </p>

      <div
        aria-hidden="true"
        className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6
          rounded-full -translate-x-1/2 scale-75 md:scale-100"
      >
        <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
          <div
            className="w-[6rem] aspect-square rounded-full m-auto p-[0.2rem]
              bg-conic-gradient"
          >
            <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
              <img
                src={brainwaveSymbol}
                alt=""
                width={48}
                height={48}
                loading="lazy"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        <ul role="presentation">
          {collabApps.map((app, index) => (
            <li
              role="presentation"
              key={app.id}
              className={`absolute
                      top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom
                      rotate-${index * 45}`}
            >
              <div
                className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                  index * 45
                }`}
              >
                <img
                  src={app.icon}
                  alt=""
                  className="m-auto"
                  width={app.width}
                  height={app.height}
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>
            </li>
          ))}
        </ul>
        <span aria-hidden="true">
          <LeftCurve />
        </span>
        <span aria-hidden="true">
          <RightCurve />
        </span>
      </div>
    </div>
  );
};

export default CollaborationAppsRing;
