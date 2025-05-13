import SectionHeading from "@/components/shared/SectionHeading";
import SectionLayout from "@/components/shared/SectionLayout";
import EventsNCelebrationsContent from "./EventsNCelebrationsContent";

const EventsNCelebrations = () => {
  return (
    <SectionLayout>
      {/* start::section heading */}
      <SectionHeading
        badgeText="Our Features"
        title="Events & Celebrations"
        subHeading="At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
      />
      {/* end::section heading */}

      {/* start::events n celebbrations content */}
      <EventsNCelebrationsContent />
      {/* end::events n celebbrations content */}
    </SectionLayout>
  );
};

export default EventsNCelebrations;
