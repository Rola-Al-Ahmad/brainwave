import Heading from "../../../components/Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "../../../components/design/Pricing";

const PricingContent = () => {
  return (
    <>
      <Heading title="Pay once, use forever" tag="Get started with Brainwave" />

      <div className="relative">
        <PricingList />
        <LeftLine />
        <RightLine />
      </div>
      <div className="flex justify-center mt-10">
        <a
          aria-label="See the full pricing details"
          className="text-xs font-code font-bold tracking-wider uppercase border-b"
          href="/pricing"
        >
          See the full details
        </a>
      </div>
    </>
  );
};

export default PricingContent;
