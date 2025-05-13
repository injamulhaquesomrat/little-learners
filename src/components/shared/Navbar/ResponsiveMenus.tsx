import { navbarItems } from "@/fakedata/navItems";
import { cn } from "@/lib/utils";
import React from "react";
import { NavLink } from "react-router";

const ResponsiveMenus = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className="flex flex-col font-medium mx-4 rounded-xl overflow-hidden border-2">
        {navbarItems.slice(0, 5).map((item) => (
          <NavLink
            to={item?.src}
            onClick={() => setOpen(!open)}
            className={({ isActive }: { isActive: boolean }) =>
              cn(
                "py-[21px] 3xl:py-[25px] px-5 3xl:px-[34px] border-b-[2px] 3xl:text-xl hover:bg-foreground",
                isActive ? "bg-secondary-background" : ""
              )
            }
          >
            {item?.name}
          </NavLink>
        ))}
        <NavLink
          to={"/contact"}
          onClick={() => setOpen(!open)}
          className="py-[21px] 3xl:py-[25px] px-5 3xl:px-[34px] 3xl:text-xl bg-[var(--orange-75)]"
        >
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default ResponsiveMenus;
