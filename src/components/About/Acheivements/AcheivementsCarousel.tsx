import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AcheivementCard from "./AcheivementCard";
import { acheivementItems } from "@/fakedata/acheivementItems";
import CarouselNavigation from "@/components/shared/CarouselNavigation";

const AcheivementsCarousel = () => {
  const [visibleAwards, setVisibleAwards] = useState(1);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  //   rest acheiement count
  useEffect(() => {
    const updateVisibleAwards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleAwards(3); // Desktop
      } else if (window.innerWidth >= 640) {
        setVisibleAwards(2); // Tablet
      } else {
        setVisibleAwards(1); // Mobile
      }
    };

    updateVisibleAwards();
    window.addEventListener("resize", updateVisibleAwards);
    return () => window.removeEventListener("resize", updateVisibleAwards);
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="pb-4 pr-1.5 sm:pr-0 overflow-hidden pt-8 3xl:pt-10"
        ref={emblaRef}
      >
        <div className="flex">
          {acheivementItems.map((item) => (
            <AcheivementCard key={item?.id} item={item} />
          ))}
        </div>
      </div>
      <div className="flex mt-7 xl:mt-10 3xl:mt-[50px] justify-between items-center">
        <div>
          <p className="text-lg font-bold font-raleway">
            {acheivementItems.length - visibleAwards} More Awards
          </p>
        </div>

        {/* start::embla carousel navigation */}
        <CarouselNavigation onPrev={scrollPrev} onNext={scrollNext} />
        {/* end::embla carousel navigation */}
      </div>
    </div>
  );
};

export default AcheivementsCarousel;
