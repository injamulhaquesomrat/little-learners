import { SheetContent } from "@/components/ui/sheet";
import ResponsiveMenuHeader from "./ResponsiveMenuHeader";
import ResponsiveMenus from "./ResponsiveMenus";

const ResponsiveMenuContent = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <SheetContent className="w-full border">
        {/* start::responsive menu header */}
        <ResponsiveMenuHeader setOpen={setOpen} />
        {/* end::responsive menu header */}

        {/* start::responsive menus */}
        <ResponsiveMenus setOpen={setOpen} />
        {/* start::responsive menus */}
      </SheetContent>
    </>
  );
};

export default ResponsiveMenuContent;
