import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/fakedata/testimonialItems";

const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full mx-auto overflow-hidden pb-4">
      {/* start::testimonial carousel cards */}
      <div
        className="md:w-[80%] xl:w-[90%] mx-auto pb-4 pr-1.5 sm:pr-0 overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex md:ml-3 h-full">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial?.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      {/* end::testimonial carousel cards */}

      {/* start::embla carousel button container */}
      <div className="grid grid-cols-1 justify-between gap-4 mt-24 md:mt-0 w-full mx-auto">
        <button
          className="absolute top-[85%] left-[30%] xs:left-[35%] sm:left-[40%] md:left-0 md:top-1/2 transform md:-translate-y-1/2 cursor-pointer bg-white text-white rounded-lg p-3 hover:bg-secondary-background transition border-2 border-border"
          onClick={scrollPrev}
        >
          <img
            src="/assets/icons/testimonials/arrow-left.svg"
            alt="arrow left"
          />
        </button>
        <button
          className="absolute top-[85%] right-[30%] xs:right-[35%] sm:right-[40%] md:right-0 md:top-1/2 transform md:-translate-y-1/2 cursor-pointer bg-white text-white rounded-lg p-3 hover:bg-secondary-background transition border-2 border-border"
          onClick={scrollNext}
        >
          <img
            src="/assets/icons/testimonials/arrow-right.svg"
            alt="arrow right"
          />
        </button>
      </div>
      {/* end::embla carousel button container */}
    </div>
  );
};

export default TestimonialsCarousel;
