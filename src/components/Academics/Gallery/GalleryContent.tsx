import { galleryItems } from "@/fakedata/galleryItems";
import GalleryItem from "./GalleryItem";

const GalleryContent = () => {
  return (
    <div className="space-y-20 xl:space-y-30 3xl:space-y-[150px]">
      {galleryItems.map((item) => (
        <GalleryItem key={item?.id} item={item} />
      ))}
    </div>
  );
};

export default GalleryContent;
