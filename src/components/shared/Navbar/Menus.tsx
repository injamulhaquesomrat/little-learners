import { navbarItems } from "@/fakedata/navItems";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router";

const Menus = () => {
  return (
    <div className="lg:flex font-medium hidden">
      {navbarItems.slice(0, 5).map((item) => (
        <NavLink
          key={item?.id}
          to={item?.src}
          className={({ isActive }: { isActive: boolean }) =>
            cn(
              "lg:py-[21px] 3xl:py-[25px] lg:px-[30px] 3xl:px-[34px] border-l-2 3xl:text-xl hover:bg-foreground transition-all duration-500 ease-in-out",
              isActive ? "bg-secondary-background" : ""
            )
          }
        >
          {item?.name}
        </NavLink>
      ))}
      <NavLink
        to={"/contact"}
        className="lg:py-[21px] 3xl:py-[25px] lg:px-[30px] 3xl:px-[34px] border-l-2 3xl:text-xl bg-navlink"
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Menus;
