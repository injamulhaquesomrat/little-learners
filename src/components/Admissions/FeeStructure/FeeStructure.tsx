import SectionHeading from "@/components/shared/SectionHeading";
import SectionLayout from "@/components/shared/SectionLayout";
import FeeStructureContent from "./FeeStructureContent";

const FeeStructure = () => {
  return (
    <SectionLayout>
      {/* start::section heading */}
      <SectionHeading
        badgeText={"Our Feature"}
        title={"Fee Structure"}
        subHeading={`Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen.`}
      />
      {/* end::section heading */}

      {/* start::fee structure content */}
      <FeeStructureContent />
      {/* end::fee structure content */}
    </SectionLayout>
  );
};

export default FeeStructure;
