import BenefitsContent from "@/components/Homepage/Benefits/BenefitsContent";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionLayout from "@/components/shared/SectionLayout";

const Features = () => {
  return (
    <SectionLayout>
      {/* start::section heading */}
      <SectionHeading
        badgeText={"Our Features"}
        title={"Our Special Features"}
        subHeading={`Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!`}
      />
      {/* end::section heading */}

      {/* start::features content */}
      <BenefitsContent />
      {/* end::features content */}
    </SectionLayout>
  );
};

export default Features;
