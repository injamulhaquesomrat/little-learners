import { useLocation } from "react-router";
import { Badge } from "../ui/badge";
import HeroContactInfo from "./HeroContactInfo";
type pageHeroProps = {
  badgeText: string;
  heading: string;
  subHeading: string;
};

const PageHero = ({ badgeText, heading, subHeading }: pageHeroProps) => {
  const currentPath = useLocation().pathname;

  return (
    <section className="pt-10 pb-20">
      <div className="border-2 border-border py-[50px] xl:py-[100px] px-[30px] lg:px-14 xl:px-20 3xl:px-[120px] 3xl:py-[150px] rounded-[10px] shadow-shadow bg-white relative xl:grid xl:grid-cols-2 gap-10 xl:gap-[50px] items-center">
        {/* start::bg props */}
        <div className="absolute top-0 left-0">
          <img
            className="h-[100px] w-[100px] lg:h-[120px] lg:w-[120px] xl:h-[137px] xl:w-[137px] 3xl:h-[200px] 3xl:w-[200px]"
            src="/assets/props/bricks.svg"
            alt="bricks props"
          />
        </div>
        {/* end::bg props */}

        <div className="flex flex-col justify-center xl:justify-start items-center xl:items-start gap-2.5 3xl:gap-3.5 pb-5 xl:pb-0 xl:col-span-1">
          <Badge
            variant={"neutral"}
            className="text-[var(--grey-20)] px-4 py-2 3xl:px-5 3xl:py-2.5 bg-white text-sm xl:text-base 3xl:text-lg"
          >
            {badgeText}
          </Badge>
          <h1 className="text-[28px] lg:text-[34px] xl:text-[38px] 3xl:text-5xl text-center xl:text-left text-[var(--grey-10)] font-bold font-raleway leading-[1.3]">
            {heading}
          </h1>
        </div>

        <div className="col-span-1">
          <p className="text-center xl:text-left text-[var(--grey-20)] font-medium leading-[1.5] 3xl:text-xl">
            {subHeading}
          </p>

          {/* start::hero contact information */}
          {currentPath === "/contact" && <HeroContactInfo />}
          {/* end::hero contact information */}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
