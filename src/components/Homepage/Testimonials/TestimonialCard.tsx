import StarRating from "@/components/shared/StarRating";
import { Card, CardContent } from "@/components/ui/card";
import { TestimonialType } from "@/types/testimonialTypes";

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => {
  return (
    <Card className="p-[30px] xl:p-10 h-full bg-white flex-none w-full sm:w-[47%] lg:w-[31%] xl:w-[30%] ml-6 xl:ml-10 3xl:ml-[50px]">
      <CardContent className="flex flex-col items-center text-center gap-5 lg:gap-6 3xl:gap-[30px] p-0 h-full">
        <div>
          <img
            className="h-[66px] w-[66px] 3xl:h-20 3xl:w-20 mb-2.5 3xl:mb-3 mx-auto rounded-full"
            src={testimonial?.image}
            alt={testimonial?.name}
          />
          <h4 className="text-xl font-semibold text-[var(--grey-20)] leading-[1.5]">
            {testimonial?.name}
          </h4>
        </div>

        <div>
          <StarRating rating={testimonial?.rating} maxStars={5} />
        </div>

        <div>
          <blockquote className="text-[var(--grey-20)] font-medium leading-[1.5] 3xl:text-xl">
            {testimonial?.feedback}
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
