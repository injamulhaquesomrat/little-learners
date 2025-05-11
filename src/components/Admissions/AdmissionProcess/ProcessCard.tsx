import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { admissionProcessTypes } from "@/types/admissionProcessTypes";

const ProcessCard = ({ process }: { process: admissionProcessTypes }) => {
  return (
    <div className="flex flex-col gap-10 3xl:gap-20 relative h-full">
      {/* start::process number card */}
      <div className="w-fit h-fit mx-auto sm:mx-0 relative">
        <div className="font-raleway bg-white text-[40px] xl:text-[44px] 3xl:text-[60px] font-extrabold text-[var(--grey-10)] leading-[1.3] px-6 py-2 xl:py-2.5 border-2 border-border shadow-light-shadow rounded-[10px]">
          0{process?.id}
        </div>
        <img
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20"
          src="/assets/icons/history/circle-ring.svg"
          alt="circle ring"
        />
        <div className="py-1.5 bg-[var(--orange-80)] absolute -bottom-[27px] 3xl:-bottom-[51px] left-1/2 -translate-x-1/2 rotate-90">
          <div className="w-10 3xl:w-18 bg-black h-[2px] "></div>
        </div>
      </div>
      {/* end::process number card */}

      {/* start::process card */}
      <Card className="p-[30px] xl:p-10 3x:p-[50px] bg-white gap-3.5 xl:gap-4 3xl:gap-5 h-full">
        <CardHeader className="p-0 gap-0">
          <CardTitle className="font-raleway text-[26px] xl:text-[30px] 3xl:text-[40px] font-extrabold text-[var(--grey-10)] leading-[1.3]">
            {process?.name}
          </CardTitle>
        </CardHeader>
        <CardDescription className="p-0 text-[var(--grey-30)] text-base 3xl:text-xl h-full">
          {process?.details}
        </CardDescription>
      </Card>
      <div
        className={cn(
          `py-1.5 bg-[var(--orange-80)] absolute -bottom-[29px] left-1/2 -translate-x-1/2 rotate-90 sm:hidden`,
          process?.id === 6 && "hidden"
        )}
      >
        <div className="w-9 bg-black h-[2px] "></div>
      </div>
      {/* end ::process number card */}
    </div>
  );
};

export default ProcessCard;
