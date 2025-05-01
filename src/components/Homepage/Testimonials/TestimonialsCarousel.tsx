import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "./TestimonialCard";
import { TestimonialType } from "@/types/testimonialTypes";

const TestimonialsCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  

  return (
    <div className="relative w-full mx-auto overflow-hidden pb-4">
      <div
        className="md:w-[80%] xl:w-[90%] mx-auto pb-4 pr-1.5 sm:pr-0 overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex md:ml-3 xl:ml-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial?.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
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

// testimonials items
const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    image: "https://avatar.iran.liara.run/public/20",
    feedback: "This service exceeded my expectations. Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    image: "https://avatar.iran.liara.run/public/91",
    feedback: "Great experience overall, but there's room for improvement.",
  },
  {
    id: 3,
    name: "Robert Brown",
    rating: 5,
    image: "https://avatar.iran.liara.run/public/12",
    feedback: "Fantastic support and quick resolution of my issues!",
  },
  {
    id: 4,
    name: "Emily Johnson",
    rating: 4.5,
    image: "https://avatar.iran.liara.run/public/98",
    feedback: "Loved the professional approach and timely updates.",
  },
  {
    id: 5,
    name: "Michael Lee",
    rating: 5,
    image: "https://avatar.iran.liara.run/public/81",
    feedback: "Absolutely the best service I've ever encountered.",
  },
  {
    id: 6,
    name: "Sophia Wilson",
    rating: 4.8,
    image: "https://avatar.iran.liara.run/public/94",
    feedback: "Wonderful experience! Will definitely come back for more.",
  },
  {
    id: 7,
    name: "William Taylor",
    rating: 4.2,
    image: "https://avatar.iran.liara.run/public/15",
    feedback: "A solid service with attention to detail.",
  },
  {
    id: 8,
    name: "Olivia Davis",
    rating: 5,
    image: "https://avatar.iran.liara.run/public/34",
    feedback: "Absolutely flawless! Cannot recommend it enough.",
  },
];
