import { footerNavItems } from "@/fakedata/footerNavItems";
import { Link } from "react-router";

const FooterMenus = () => {
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:col-span-8 3xl:col-span-6 gap-x-[30px] gap-y-[50px] pt-10 lg:pt-0">
      {footerNavItems.map((footerItem) => (
        <ul
          key={footerItem?.id}
          className="flex flex-col gap-3.5 font-medium text-text-muted 3xl:text-xl"
        >
          <li className="font-semibold pb-2.5">{footerItem?.heading}</li>
          {footerItem?.links.map((link) => (
            <Link to={link?.url} key={link?.id}>
              <li>{link?.label}</li>
            </Link>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default FooterMenus;
