import BenefitsContent from "@/components/Homepage/Benefits/BenefitsContent";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionLayout from "@/components/shared/SectionLayout";

const StudentSupport = () => {
  return (
    <SectionLayout>
      {/* start::section heading */}
      <SectionHeading
        badgeText="Our Achievements"
        title="Student Support"
        subHeading="At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
      />
      {/* end::section heading */}

      {/* start::events n celebbrations content */}
      <BenefitsContent />
      {/* end::events n celebbrations content */}
    </SectionLayout>
  );
};

export default StudentSupport;
