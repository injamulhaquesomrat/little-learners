import { contactInfoItems } from "@/fakedata/contactInfoItems";
import { Link } from "react-router";

const HeroContactInfo = () => {
  return (
    <>
      <ul className="grid grid-col-1 md:grid-cols-2 gap-5 pt-[30px] 3xl:text-xl">
        {contactInfoItems.map((item) => (
          <li key={item?.id}>
            <Link to={item?.link}>
              <div className="flex items-center gap-2 border-2 border-border px-3.5 py-4 rounded-[10px] bg-background">
                <div className="h-8 w-8 3xl:h-10 3xl:w-10 bg-foreground rounded border-2 border-border flex justify-center items-center">
                  <img className="size-5" src={item?.logo} alt={item?.name} />
                </div>
                <div>{item?.contactText}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeroContactInfo;
