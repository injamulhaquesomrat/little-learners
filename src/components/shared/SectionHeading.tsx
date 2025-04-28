import { Badge } from "../ui/badge";

const SectionHeading = ({
  badgeText,
  title,
  subHeading,
}: {
  badgeText: string;
  title: string;
  subHeading: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center gap-2.5 md:gap-3 lg:gap-3.5 3xl:gap-[19px] pb-[50px] xl:pb-20 3xl:pb-[100px]">
      <Badge
        variant={"neutral"}
        className="text-[var(--grey-20)] px-3.5 py-2 3xl:px-5 3xl:py-2.5 bg-white text-sm xl:text-base 3xl:text-lg"
      >
        {badgeText}
      </Badge>

      <h2 className="text-[38px] md:text-[42px] lg:text-5xl 3xl:text-[58px] font-bold font-raleway text-ring leading-[1.3]">
        {title}
      </h2>

      <p className="text-[var(--grey-20)] font-medium leading-[1.5] md:w-[700px] xl:w-[880px] 3xl:w-[992px] 3xl:text-xl">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionHeading;
