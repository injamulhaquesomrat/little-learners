import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GalleryItemCarousel from "./GalleryItemCarousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const GalleryItem = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  // navigation handlers
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div>
      {/* start::gallery item carousel */}
      <GalleryItemCarousel emblaRef={emblaRef} />
      {/* end::gallery item carousel */}

      {/* start:: gallery item card */}
      <Card className="p-[30px] text-center bg-white pt-80">
        <CardHeader className="p-0 text-[var(--grey-10)]">
          <CardTitle>Classrooms</CardTitle>

          <div className="flex mt-7 xl:mt-10 3xl:mmt-[50px] justify-between items-center">
            {/* start::embla carousel button container */}
            <div className="grid grid-cols-2 justify-between gap-4 md:mt-0">
              <button
                className="cursor-pointer bg-white text-white rounded-lg p-2.5 hover:bg-secondary-background transition border-2 border-border"
                onClick={scrollPrev}
              >
                <img
                  src="/assets/icons/testimonials/arrow-left.svg"
                  alt="arrow left"
                />
              </button>
              <button
                className="cursor-pointer bg-white text-white rounded-lg p-2.5 hover:bg-secondary-background transition border-2 border-border"
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
        </CardHeader>
        <CardDescription className="p-0 text-[var(--grey-10)]">
          Our well-equipped classrooms are designed to provide a nurturing and
          stimulating learning environment. Each classroom is thoughtfully
          arranged to inspire creativity, curiosity, and engagement.
        </CardDescription>
      </Card>
      {/* end:: gallery item card */}
    </div>
  );
};

export default GalleryItem;
