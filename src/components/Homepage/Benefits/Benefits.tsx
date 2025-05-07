import SectionLayout from "@/components/shared/SectionLayout";
import SectionHeading from "../../shared/SectionHeading";
import BenefitsContent from "./BenefitsContent";

const Benefits = () => {
  return (
    <SectionLayout>
      {/* start::section heading */}
      <SectionHeading
        badgeText={"Children Deserve Bright Future"}
        title={"Our Benefits"}
        subHeading={`With a dedicated team of experienced educators, state-of-the-art
        facilities, and a comprehensive curriculum, we aim to lay a strong
        foundation for your child's future.`}
      />
      {/* end::section heading */}

      {/* start::benefits content */}
      <BenefitsContent />
      {/* end::benefits content */}
    </SectionLayout>
  );
};

export default Benefits;
