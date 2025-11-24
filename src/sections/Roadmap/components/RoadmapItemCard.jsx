import { memo } from "react";

import Tagline from "../../../components/Tagline";

import { check2, grid, loading1 } from "../../../assets";

const RoadmapItemCard = ({ item, status }) => {
  return (
    <li
      role="listitem"
      className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
        item.colorful ? "bg-conic-gradient" : "bg-n-6"
      }`}
    >
      <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
        <div className="absolute top-0 left-0 max-w-full">
          <img
            className="w-full"
            src={grid}
            width={550}
            height={550}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        </div>
        <div className="relative z-1">
          <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
            <Tagline>{item.date}</Tagline>

            <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
              <img
                className="mr-2.5"
                src={item.status === "done" ? check2 : loading1}
                width={16}
                height={16}
                alt={`Roadmap item status: ${status}`}
              />
              <div className="tagline">{status}</div>
            </div>
          </div>

          <div className="mb-10 -my-10 -mx-15">
            <img
              className="w-full"
              src={item.imageUrl}
              width={628}
              height={426}
              alt={item.title}
              loading="lazy"
            />
          </div>
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 text-n-4">{item.text}</p>
        </div>
      </div>
    </li>
  );
};

export default memo(RoadmapItemCard);
