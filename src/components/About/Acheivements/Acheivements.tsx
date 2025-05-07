import SectionHeading from "@/components/shared/SectionHeading";
import AcheivementsCarousel from "./AcheivementsCarousel";
import SectionLayout from "@/components/shared/SectionLayout";

const Acheivements = () => {
  return (
    <SectionLayout>
      {/* start::section heading*/}
      <SectionHeading
        badgeText="Our Achievements"
        title="Our Awards and Recognitions"
        subHeading="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
      />
      {/* end::section heading*/}

      {/* start::acheivements carousel */}
      <AcheivementsCarousel />
      {/* end::acheivements carousel */}
    </SectionLayout>
  );
};

export default Acheivements;
