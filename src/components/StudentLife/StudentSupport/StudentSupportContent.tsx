import BenefitCard from "@/components/Homepage/Benefits/BenefitCard";
import { studentSupportItems } from "@/fakedata/studentSupportItems";

const StudentSupportContent = () => {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-y-[68px] 3xl:gap-y-[85px] gap-x-10">
      {studentSupportItems.map((item) => (
        <BenefitCard key={item?.id} item={item} />
      ))}
    </div>
  );
};

export default StudentSupportContent;
