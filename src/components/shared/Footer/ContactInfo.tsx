import { contactInfoItems } from "@/fakedata/contactInfoItems";
import { Link } from "react-router";

const ContactInfo = () => {
  return (
    <>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 sm:justify-center lg:justify-start gap-5 pt-10 3xl:text-xl">
        {contactInfoItems.slice(0, 3).map((item) => (
          <li className="w-fit" key={item?.id}>
            <Link to={item?.link}>
              <div className="flex items-center gap-2 3xl:gap-2.5">
                <div className="h-8 w-8 3xl:h-10 3xl:w-10 bg-foreground rounded border-2 border-border flex justify-center items-center">
                  <img src={item?.logo} alt={item?.name} />
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

export default ContactInfo;
