import SectionHeading from "@/components/shared/SectionHeading";
import SectionLayout from "@/components/shared/SectionLayout";
import ExtraCurricularContent from "./ExtraCurricularContent";

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
      <ExtraCurricularContent />
      {/* end::extracurricular content */}
    </SectionLayout>
  );
};

export default ExtraCurricularActivities;
