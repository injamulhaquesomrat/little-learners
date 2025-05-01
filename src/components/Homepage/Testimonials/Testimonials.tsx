import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
  return (
    <section className="pb-20 xl:pb-[150px] 3xl:pb-[200px]">
      <SectionHeading
        badgeText="Their Happy Words 🤗"
        title="Our Testimonials"
        subHeading="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />
      <TestimonialsCarousel />
    </section>
  );
};

export default Testimonials;
