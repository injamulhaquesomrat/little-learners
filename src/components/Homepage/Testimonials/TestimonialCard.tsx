import StarRating from "@/components/shared/StarRating";
import { Card, CardContent } from "@/components/ui/card";
import { TestimonialType } from "@/types/testimonialTypes";

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialType }) => {
  return (
    <Card className="p-[30px] pt-[50px] pr-10 xl:p-10 xl:pt-[60px] h-full bg-white flex-none w-full sm:w-1/2 lg:w-1/3">
      <CardContent className="flex flex-col items-center text-center">
        <div>
          <img src={testimonial?.image} alt={testimonial?.name} />
          <h4>{testimonial?.name}</h4>
        </div>

        <div>
          <StarRating rating={testimonial?.rating} maxStars={5} />
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
