import SectionHeading from "@/components/shared/SectionHeading";
import AcheivementsCarousel from "./AcheivementsCarousel";

const Acheivements = () => {
  return (
    <section className="pb-20 xl:pb-[150px] 3xl:pb-[200px]">
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
    </section>
  );
};

export default Acheivements;
