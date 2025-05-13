import { eventsNCelebrationItems } from "@/fakedata/eventsNCelebrationItems";
import EventNCelebrationCard from "./EventNCelebrationCard";

const EventsNCelebrationsContent = () => {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10 3xl:gap-[50px]">
      {eventsNCelebrationItems.map((event) => (
        <EventNCelebrationCard key={event?.id} event={event} />
      ))}
    </div>
  );
};

export default EventsNCelebrationsContent;
