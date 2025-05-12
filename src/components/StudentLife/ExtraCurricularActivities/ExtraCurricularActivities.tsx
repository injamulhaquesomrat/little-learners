import BenefitsContent from "@/components/Homepage/Benefits/BenefitsContent";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionLayout from "@/components/shared/SectionLayout";

const ExtraCurricularActivities = () => {
  return (
    <SectionLayout>
      {/* start::section heading */}
      <SectionHeading
        badgeText="Our Features"
        title="Extracurricular Activities"
        subHeading="At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including"
      />
      {/* end::section heading */}

      {/* start::extracurricular content */}
      <BenefitsContent />
      {/* end::extracurricular content */}
    </SectionLayout>
  );
};

export default ExtraCurricularActivities;
