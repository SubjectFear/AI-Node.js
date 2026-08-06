import SectionTitle from "../Common/SectionTitle";
import SinglePricing from "./SInglePricing";
import { pricingData } from "../../../stripe/pricingData";

const PricingGrids = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Work with me"
          title="Web Development Packages"
          paragraph="Project-based pricing for custom websites and web applications, built with React, Next.js, and modern tooling. Every package includes clean, maintainable code and direct collaboration with me from kickoff to launch."
        />
        <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
          {pricingData &&
            pricingData.map((price, key) => (
              <SinglePricing price={price} key={key} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PricingGrids;
