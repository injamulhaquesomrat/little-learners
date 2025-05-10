import { admissionProcessItems } from "@/fakedata/admissionProcessItems";
import ProcessCard from "./ProcessCard";

const AdmissionProcessContent = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-y-20 3xl:gap-y-[100px]">
      {admissionProcessItems.map((process) => (
        <ProcessCard key={process?.id} process={process} />
      ))}
    </div>
  );
};

export default AdmissionProcessContent;
