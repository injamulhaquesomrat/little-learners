import { imageItem } from "@/types/galleryItemTypes";
import { EmblaViewportRefType } from "embla-carousel-react";

interface GalleryItemCarouselProps {
  emblaRef: EmblaViewportRefType;
  images: imageItem[];
}

const GalleryItemCarousel = ({ emblaRef }: GalleryItemCarouselProps) => {
  return (
    <div className="relative -bottom-[90px] md:-bottom-[100px] xl:-bottom-[125px] w-full mx-auto overflow-hidden px-[30px] xl:px-10 3xl:px-[50px] z-10">
      <div className="pr-0 overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {galleryItems.map((item) => (
            <div
              key={item?.id}
              className="flex-none w-full sm:w-[47.5%] lg:w-[31.5%] xl:w-[22.4%] ml-6 xl:ml-10 3xl:ml-[50px] rounded-[10px] border-2 border-border overflow-hidden"
            >
              <img
                className="h-full w-full aspect-[298/203] xl:aspect-[270/234] object-cover"
                src="https://placehold.co/600x400"
                alt="gallery image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryItemCarousel;

const galleryItems = [
  {
    id: 1,
    src: "https://placehold.co/600x400",
  },
  {
    id: 2,
    src: "https://placehold.co/600x400",
  },
  {
    id: 3,
    src: "https://placehold.co/600x400",
  },
  {
    id: 4,
    src: "https://placehold.co/600x400",
  },
  {
    id: 5,
    src: "https://placehold.co/600x400",
  },
  {
    id: 6,
    src: "https://placehold.co/600x400",
  },
  {
    id: 7,
    src: "https://placehold.co/600x400",
  },
];
