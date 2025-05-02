import Logo from "../Logo";
import Menus from "./Menus";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  return (
    <div className="pt-10 px-4 2xl:px-0">
      <div className="flex justify-between items-center container 2xl:w-[1339px] 3xl:w-[1819px] mx-auto border-2 rounded-xl overflow-hidden bg-white">
        {/* start::logo */}
        <div className="px-5 py-4 3xl:py-5 3xl:px-6 bg-main border-r-2 flex justify-center items-center">
          <Logo />
        </div>
        {/* end::logo */}

        {/* start::menus */}
        <Menus />
        {/* end::menus */}

        {/* start::mobile menus */}
        <ResponsiveMenu />
        {/* end::mobile menus */}
      </div>
    </div>
  );
};

export default Navbar;
