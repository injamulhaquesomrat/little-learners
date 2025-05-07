import SectionHeading from "@/components/shared/SectionHeading";
import NTPContent from "./NTPContent";
import SectionLayout from "@/components/shared/SectionLayout";

const NavigateThroughPages = () => {
  return (
    <SectionLayout>
      {/* start::section heading */}
      <SectionHeading
        badgeText="Explore More"
        title="Navigate through our Pages"
        subHeading="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
      />
      {/* end::section heading */}

      {/* start:: navigate through pages content*/}
      <NTPContent />
      {/* end:: navigate through pages content*/}
    </SectionLayout>
  );
};

export default NavigateThroughPages;
