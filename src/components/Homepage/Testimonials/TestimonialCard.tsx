import StarRating from "@/components/shared/StarRating";
import { Card, CardContent } from "@/components/ui/card";
import { TestimonialType } from "@/types/testimonialTypes";

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => {
  return (
    <Card className="p-[30px] xl:p-10 xl:pt-[60px] h-full bg-white flex-none w-full sm:w-1/2 lg:w-1/3 ml-6">
      <CardContent className="flex flex-col items-center text-center gap-5 p-0 h-full">
        <div>
          <img
            className="h-[66px] w-[66px] mb-2.5"
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
          <blockquote className="text-[var(--grey-20)] font-medium leading-[1.5]">
            {testimonial?.feedback}
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
