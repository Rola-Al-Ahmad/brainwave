import { memo } from "react";

import { companyLogos } from "../../../constants";

const LogosList = () => {
  return (
    <ul
      className="flex"
      aria-label="Partner companies using our platform"
      role="list"
    >
      {companyLogos.map((logo, index) => (
        <li
          className="flex items-center justify-center flex-1 h-[8.5rem]"
          key={index}
          role="listitem"
        >
          <img src={logo} width={134} height={28} alt={logo} loading="lazy" />
        </li>
      ))}
    </ul>
  );
};

export default memo(LogosList);
