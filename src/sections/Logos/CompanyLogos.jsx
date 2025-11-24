import { memo } from "react";
import CompanyLogosTitle from "./components/CompanyLogosTitle";
import LogosList from "./components/LogosList";

const CompanyLogos = ({ className }) => {
  return (
    <div aria-label="Partner company logos" className={className}>
      <CompanyLogosTitle />
      <LogosList />
    </div>
  );
};

export default memo(CompanyLogos);
