import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
  return (
    <section className="pb-20 xl:pb-[150px] 3xl:pb-[200px]">
      <SectionHeading
        badgeText="Their Happy Words 🤗"
        title="Our Testimonials"
        subHeading="What our clients say about us"
      />
      <TestimonialsCarousel />
    </section>
  );
};

export default Testimonials;
