import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { subjectTypes } from "@/types/subjectTypes";

const EventNCelebrationCard = ({ event }: { event: subjectTypes }) => {
  return (
    <Card className="rounded-[10px] bg-white py-0 gap-0">
      {/* start::card image content */}
      <div className="relative p-[30px] xl:p-10 3xl:p-[50px] pb-0 xl:pb-0 3xl:pb-0">
        <img
          src={event?.image}
          alt={event?.title}
          className="w-full h-auto z-10 relative border-2 border-border rounded-[10px] "
        />
        <div
          className={`w-full h-[93px] border-y-2 border-border bg-secondary-background absolute ${
            event?.id % 2 === 0 ? "bottom-0" : "top-1/2 -translate-y-1/2"
          } left-0 z-0`}
        />
      </div>
      {/* start::card image content */}

      {/* start::card content */}
      <div className="grid gap-2.5 xl:gap-3.5 3xl:gap-5 p-[30px] xl:p-10 3xl:p-[50px]">
        <CardHeader className="p-0 text-center gap-0">
          <CardTitle className="text-[22px] xl:text-2xl 3xl:text-[28px] font-bold font-raleway leading-[1.3] text-text-primary">
            {event?.title}
          </CardTitle>
        </CardHeader>
        <CardDescription className="p-0 text-center text-text-light font-medium 3xl:text-xl">
          {event?.description}
        </CardDescription>
      </div>
      {/* end::card content */}
    </Card>
  );
};

export default EventNCelebrationCard;
