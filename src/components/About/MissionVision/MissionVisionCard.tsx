import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
type MissionVisionCardProps = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const MissionVisionCard = ({ item }: { item: MissionVisionCardProps }) => {
  return (
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
  );
};

export default MissionVisionCard;
