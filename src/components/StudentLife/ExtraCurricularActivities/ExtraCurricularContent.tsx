import BenefitCard from "@/components/Homepage/Benefits/BenefitCard";
import { extracurricularItems } from "@/fakedata/extracurricularItems";

const ExtraCurricularContent = () => {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-y-[68px] 3xl:gap-y-[85px] gap-x-10">
      {extracurricularItems.map((item) => (
        <BenefitCard key={item?.id} item={item} />
      ))}
    </div>
  );
};

export default ExtraCurricularContent;
