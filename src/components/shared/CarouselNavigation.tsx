import { cn } from "@/lib/utils";

interface CarouselNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
  prevBtnClassName?: string;
  nextBtnClassName?: string;
}

const CarouselNavigation = ({
  onPrev,
  onNext,
  className,
  prevBtnClassName,
  nextBtnClassName,
}: CarouselNavigationProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 justify-between gap-4 md:mt-0",
        className
      )}
    >
      <button
        className={cn(
          "cursor-pointer bg-white text-white rounded-lg p-2.5 hover:bg-secondary-background transition border-2 border-border 3xl:h-[58px] 3xl:w-[58px] 3xl:inline-flex 3xl:items-center 3xl:justify-center",
          prevBtnClassName
        )}
        onClick={onPrev}
      >
        <img
          className="3xl:h-[30px] 3xl:w-[30px]"
          src="/assets/icons/testimonials/arrow-left.svg"
          alt="arrow left"
        />
      </button>
      <button
        className={cn(
          "cursor-pointer bg-white text-white rounded-lg p-2.5 hover:bg-secondary-background transition border-2 border-border 3xl:h-[58px] 3xl:w-[58px] 3xl:inline-flex 3xl:items-center 3xl:justify-center",
          nextBtnClassName
        )}
        onClick={onNext}
      >
        <img
          className="3xl:h-[30px] 3xl:w-[30px]"
          src="/assets/icons/testimonials/arrow-right.svg"
          alt="arrow right"
        />
      </button>
    </div>
  );
};

export default CarouselNavigation;
