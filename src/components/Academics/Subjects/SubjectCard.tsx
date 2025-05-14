import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { subjectTypes } from "@/types/subjectTypes";

const SubjectCard = ({ subject }: { subject: subjectTypes }) => {
  return (
    <Card className="p-[30px] xl:p-10 3xl:p-[50px] rounded-[10px] gap-[30px] xl:gap-10 3xl:gap-[50px] bg-white relative">
      {/* start::card image content */}
      <div className="border-2 border-border rounded-[10px] overflow-hidden z-10">
        <img
          src={subject?.image}
          alt={subject?.title}
          className="w-full h-auto"
        />
      </div>
      <div className="h-[237px] sm:h-[197px] md:h-[240px] lg:h-[330px] xl:h-[270px] 2xl:h-[280px] 3xl:h-[350px] w-[93px] rounded-b-[10px] border-2 border-t-0 border-border bg-secondary-background absolute top-0 left-1/2 -translate-x-1/2 z-0" />
      {/* start::card image content */}

      {/* start::card content */}
      <div className="grid gap-2.5 xl:gap-3.5 3xl:gap-5">
        <CardHeader className="p-0 text-center gap-0">
          <CardTitle className="text-[22px] xl:text-2xl 3xl:text-[28px] font-bold font-raleway leading-[1.3] text-text-primary">
            {subject?.title}
          </CardTitle>
        </CardHeader>
        <CardDescription className="p-0 text-center text-text-light font-medium 3xl:text-xl">
          {subject?.description}
        </CardDescription>
      </div>
      {/* end::card content */}
    </Card>
  );
};

export default SubjectCard;
