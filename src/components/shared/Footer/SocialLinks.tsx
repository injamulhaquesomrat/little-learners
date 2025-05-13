import { Button } from "@/components/ui/button";
import { socialItems } from "@/fakedata/socialItems";
import { Link } from "react-router";

const SocialLinks = () => {
  return (
    <>
      <ul className="flex gap-2.5 xl:gap-3.5">
        {socialItems.map((item) => (
          <Link to={item?.link} key={item?.id}>
            <Button className="h-[44px] lg:h-12 3xl:h-14 w-[44px] lg:w-12 3xl:w-14 flex cursor-pointer justify-center p-0 items-center bg-foreground rounded border-2 border-border shadow-light-shadow">
              <img src={item?.icon} alt={item?.name} />
            </Button>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default SocialLinks;
