import { imageItem } from "@/types/galleryItemTypes";
import { EmblaViewportRefType } from "embla-carousel-react";

interface GalleryItemCarouselProps {
  emblaRef: EmblaViewportRefType;
  images: imageItem[];
}

const GalleryItemCarousel = ({
  emblaRef,
  images,
}: GalleryItemCarouselProps) => {
  return (
    <div className="relative -bottom-[90px] md:-bottom-[100px] xl:-bottom-[125px] w-full mx-auto overflow-hidden px-[30px] xl:px-10 3xl:px-[50px] z-10">
      <div className="pr-0 overflow-hidden" ref={emblaRef}>
        <div className="flex justify-start items-center">
          {images.map((item) => (
            <div
              key={item?.id}
              className="flex-none w-full sm:w-[47.5%] md:w-[48%] lg:w-[31.5%] xl:w-[23%] 3xl:w-[22.99%] ml-6 xl:ml-8 3xl:ml-10 rounded-[10px] border-2 border-border overflow-hidden"
            >
              <img
                className="h-full w-full aspect-[298/203] xl:aspect-[270/234] object-cover"
                src={item?.src}
                alt={item?.src}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryItemCarousel;
