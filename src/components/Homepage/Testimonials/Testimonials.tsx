import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialsCarousel from "./TestimonialsCarousel";
import SectionLayout from "@/components/shared/SectionLayout";

const Testimonials = () => {
  return (
    <SectionLayout>
      <SectionHeading
        badgeText="Their Happy Words 🤗"
        title="Our Testimonials"
        subHeading="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />
      <TestimonialsCarousel />
    </SectionLayout>
  );
};

export default Testimonials;
