import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Logo from "../Logo";

const ResponsiveMenuHeader = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
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
    </>
  );
};

export default ResponsiveMenuHeader;
