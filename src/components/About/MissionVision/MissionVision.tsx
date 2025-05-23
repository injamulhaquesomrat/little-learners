import SectionHeading from "@/components/shared/SectionHeading";
import { missionVisionItems } from "@/fakedata/missionVisionItems";
import MissionVisionCard from "./MissionVisionCard";
import SectionLayout from "@/components/shared/SectionLayout";

const MissionVision = () => {
  return (
    <SectionLayout>
      {/* start::section heading*/}
      <SectionHeading
        badgeText="Mission & Vision"
        title="Our Missions & Visions"
        subHeading="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
      />
      {/* end::section heading*/}

      {/* start::mission & vision content */}
      <div className="grid md:grid-cols-2 gap-[30px] xl:gap-10">
        {missionVisionItems.map((item) => (
          <MissionVisionCard key={item?.id} item={item} />
        ))}
      </div>
      {/* end::mission & vision content */}
    </SectionLayout>
  );
};

export default MissionVision;
