import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GalleryItemCarousel from "./GalleryItemCarousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { galleryItem } from "@/types/galleryItemTypes";
import CarouselNavigation from "@/components/shared/CarouselNavigation";

const GalleryItem = ({ item }: { item: galleryItem }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  // navigation handlers
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="-mt-[90px] md:-mt-[100px] xl:-mt-[125px] pt-20 xl:pt-30 3xl:pt-[150px]">
      {/* start::gallery item carousel */}
      <GalleryItemCarousel emblaRef={emblaRef} images={item?.images} />
      {/* end::gallery item carousel */}

      {/* start:: gallery item card */}
      <Card className="p-[30px] xl:p-10 3xl:p-[50px] pt-30 xl:pt-40 3xl:pt-40 text-center md:text-left bg-white gap-5 xl:gap-[30px]">
        <CardHeader className="p-0 text-[var(--grey-10)] flex flex-col xs:flex-row-reverse justify-between items-center gap-5">
          <div className="flex justify-between items-center">
            {/* start::embla carousel navigation */}
            <CarouselNavigation onPrev={scrollPrev} onNext={scrollNext} />
            {/* end::embla carousel navigation */}
          </div>

          {/* start::card title */}
          <CardTitle className="text-[28px] lg:text-3xl xl:text-[34px] 3xl:text-[40px] font-raleway font-bold text-[var(--grey-10)] leading-[1.5]">
            {item?.type}
          </CardTitle>
          {/* end::card title */}
        </CardHeader>

        <CardDescription className="p-0 text-[var(--grey-30)] text-lg xl:text-xl 3xl:text-[22px] font-medium">
          {item?.description}
        </CardDescription>
      </Card>
      {/* end:: gallery item card */}
    </div>
  );
};

export default GalleryItem;
