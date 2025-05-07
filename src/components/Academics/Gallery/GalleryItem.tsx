import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GalleryItemCarousel from "./GalleryItemCarousel";

const GalleryItem = () => {
  return (
    <div>
      {/* start::gallery item carousel */}
      <GalleryItemCarousel />
      {/* end::gallery item carousel */}

      {/* start:: gallery item card */}
      <Card className="p-[30px] text-center">
        <CardHeader className="p-0 text-[var(--grey-10)]">
          <CardTitle>Classrooms</CardTitle>
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
