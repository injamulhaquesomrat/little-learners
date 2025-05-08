import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/fakedata/testimonialItems";
import CarouselNavigation from "@/components/shared/CarouselNavigation";

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

      {/* start::embla carousel navigation */}
      <CarouselNavigation
        className="grid-cols-1 mt-24 w-full mx-auto"
        prevBtnClassName="absolute top-[85%] left-[30%] xs:left-[35%] sm:left-[40%] md:left-0 md:top-1/2 transform md:-translate-y-1/2"
        nextBtnClassName="absolute top-[85%] right-[30%] xs:right-[35%] sm:right-[40%] md:right-0 md:top-1/2 transform md:-translate-y-1/2"
        onPrev={scrollPrev}
        onNext={scrollNext}
      />
      {/* end::embla carousel navigation */}
    </div>
  );
};

export default TestimonialsCarousel;
