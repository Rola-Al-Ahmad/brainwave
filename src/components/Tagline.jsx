import { memo } from "react";
import brackets from "../assets/svg/Brackets";

const Tagline = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      <span aria-hidden="true">{brackets("left")}</span>
      <div className="max-3 text-n-3">&nbsp;&nbsp;{children}&nbsp;&nbsp;</div>
      <span aria-hidden="true">{brackets("right")}</span>
    </div>
  );
};

export default memo(Tagline);
