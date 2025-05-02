import SectionHeading from "@/components/shared/SectionHeading";
import NTPContent from "./NTPContent";

const NavigateThroughPages = () => {
  return (
    <section className="pb-20 xl:pb-[150px] 3xl:pb-[200px]">
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
    </section>
  );
};

export default NavigateThroughPages;
