import SectionHeading from "@/components/shared/SectionHeading";
import FaqContent from "./FaqContent";

const Faqs = () => {
  return (
    <section className="pb-20 xl:pb-[150px] 3xl:pb-[200px]">
      {/* start::section heading */}
      <SectionHeading
        badgeText={"Solutions For The Doubts"}
        title={"Frequently Asked Questions"}
        subHeading={`Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.`}
      />
      {/* end::section heading */}

      {/* start::faq content */}
      <FaqContent />
      {/* end::faq content */}
    </section>
  );
};

export default Faqs;
