import { RefObject } from "react";

interface GalleryItemCarouselProps {
  emblaRef: RefObject<HTMLDivElement>;
}

const GalleryItemCarousel = ({ emblaRef }: GalleryItemCarouselProps) => {
  return (
    <div className="relative w-full mx-auto overflow-hidden px-[30px]">
      <div
        className="pb-4 pr-1.5 sm:pr-0 overflow-hidden pt-8 3xl:pt-10"
        ref={emblaRef}
      >
        <div className="flex">
          {galleryItems.map((item) => (
            <div
              key={item?.id}
              className="flex-none w-full sm:w-[47.5%] lg:w-[31.5%] xl:w-[31.1%] ml-6 xl:ml-10 3xl:ml-[50px]"
            >
              <img src="https://placehold.co/600x400" alt="gallery image" />
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
