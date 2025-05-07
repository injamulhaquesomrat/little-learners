import SectionHeading from "@/components/shared/SectionHeading";
import SectionLayout from "@/components/shared/SectionLayout";
import GalleryContent from "./GalleryContent";

const Gallery = () => {
  return (
    <SectionLayout>
      {/* start::section heading */}
      <SectionHeading
        badgeText={"Our Gallery"}
        title={"Our Rooms Gallery"}
        subHeading={`Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.`}
      />
      {/* end::section heading */}

      {/* start::gallery content */}
      <GalleryContent />
      {/* end::gallery content */}
    </SectionLayout>
  );
};

export default Gallery;
