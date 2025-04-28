import { benefitItems } from "@/fakedata/benefitItems";
import BenefitCard from "./BenefitCard";

const BenefitsContent = () => {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-y-[68px] 3xl:gap-y-[85px] gap-x-10">
      {benefitItems.map((item) => (
        <BenefitCard key={item?.id} item={item} />
      ))}
    </div>
  );
};

export default BenefitsContent;
