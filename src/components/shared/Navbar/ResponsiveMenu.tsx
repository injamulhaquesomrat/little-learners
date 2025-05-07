import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import ResponsiveMenuContent from "./ResponsiveMenuContent";

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
      {/* start::responsive menu trigger */}
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
      {/* end::responsive menu trigger */}

      {/* start::responsive menu content */}
      <ResponsiveMenuContent setOpen={setOpen} />
      {/* end::responsive menu content */}
    </Sheet>
  );
};

export default ResponsiveMenu;
