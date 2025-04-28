import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type BenefitItem = {
  id: string;
  title: string;
  icon: string;
  description: string;
};

const BenefitCard = ({ item }: { item: BenefitItem }) => {
  return (
    <div className="relative">
      <div className="p-4 rounded-lg border-2 absolute -top-[28px] 3xl:-top-[37px] left-[24px] z-20 bg-foreground flex items-center justify-center h-[56px] w-[56px] 3xl:h-[74px] 3xl:w-[74px]">
        <img className="3xl:h-[34px] 3xl:w-[34px]" src={item?.icon} alt={item?.title} />
      </div>
      <Card className="p-[30px] pt-[50px] pr-10 xl:p-10 xl:pt-[60px] h-full bg-white">
        <CardHeader className="px-0 gap-4 3xl:gap-5">
          <CardTitle className="text-[var(--grey-10)] text-[22px] xl:text-2xl 3xl:text-[28px] font-bold font-raleway leading-[1.3]">
            {item?.title}
          </CardTitle>
          <CardDescription className="text-[var(--grey-40)] text-base 3xl:text-xl">
            {item?.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default BenefitCard;
