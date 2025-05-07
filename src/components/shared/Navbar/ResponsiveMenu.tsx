import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";
import { navbarItems } from "@/fakedata/navItems";

const ResponsiveMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false); // Close the sheet on lg devices
      }
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="lg:hidden px-[17px] md:px-[30px] py-[17px] border-l-2 bg-secondary-background cursor-pointer">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.5 7.875C3.5 7.39175 3.89175 7 4.375 7H23.625C24.1082 7 24.5 7.39175 24.5 7.875C24.5 8.35825 24.1082 8.75 23.625 8.75H4.375C3.89175 8.75 3.5 8.35825 3.5 7.875ZM3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14ZM13.125 20.125C13.125 19.6418 13.5168 19.25 14 19.25H23.625C24.1082 19.25 24.5 19.6418 24.5 20.125C24.5 20.6082 24.1082 21 23.625 21H14C13.5168 21 13.125 20.6082 13.125 20.125Z"
              fill="#262626"
            />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent className="w-full border">
        <SheetHeader>
          <SheetTitle />
          <SheetDescription />
          <div className="flex justify-between items-center border-2 rounded-xl overflow-hidden bg-white mt-6">
            <div className="px-5 py-4 3xl:py-5 3xl:px-6 bg-main w-fit border-r-2 border-border">
              <Logo />
            </div>

            {/* Custom Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="lg:hidden px-[24px] md:px-[30px] py-[24px] border-l-2 bg-secondary-background cursor-pointer"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L7 5.93934L12.4697 0.469671C12.7626 0.176777 13.2374 0.176778 13.5303 0.469671C13.8232 0.762564 13.8232 1.23744 13.5303 1.53033L8.06066 7L13.5303 12.4697C13.8232 12.7626 13.8232 13.2374 13.5303 13.5303C13.2374 13.8232 12.7626 13.8232 12.4697 13.5303L7 8.06066L1.53033 13.5303C1.23744 13.8232 0.762563 13.8232 0.46967 13.5303C0.176777 13.2374 0.176777 12.7626 0.46967 12.4697L5.93934 7L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z"
                  fill="#1A1A1A"
                />
              </svg>
            </button>
          </div>
        </SheetHeader>
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
            className="py-[21px] 3xl:py-[25px] px-5 3xl:px-[34px] 3xl:text-xl bg-[var(--orange-75)]"
          >
            Contact
          </NavLink>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveMenu;
