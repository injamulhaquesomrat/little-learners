import SectionHeading from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { missionVisionItems } from "@/fakedata/missionVisionItems";

const MissionVision = () => {
  return (
    <section className="pb-20 xl:pb-[150px] 3xl:pb-[200px]">
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
          <Card
            key={item?.id}
            className="p-10 xl:p-[50px] 3xl:p-[60px] gap-10 xl:gap-[50px] 3xl:gap-[60px] bg-white"
          >
            <CardHeader className="flex items-center justify-between p-0">
              <CardTitle className="text-[30px] xl:text-[38px] 3xl:text-5xl text-[var(--grey-10)] font-raleway font-bold leading-[1.3]">
                {item?.title}
              </CardTitle>
              <img
                className="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] 3xl:h-20 3xl:w-20"
                src={item?.icon}
                alt={item?.title}
              />
            </CardHeader>
            <CardContent className="p-0 text-[var(--grey-20)] leading-[1.5] 3xl:text-xl">
              {item?.description}
            </CardContent>
          </Card>
        ))}
      </div>
      {/* end::mission & vision content */}
    </section>
  );
};

export default MissionVision;
