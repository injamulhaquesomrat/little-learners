import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center container 3xl:w-[1819px] mx-auto border-[2px] mt-10 rounded-xl overflow-hidden">
        {/* start::logo */}
        <div className="py-5 px-6 bg-main border-r-[2px] outline-0">
          <Link to={"/"}>
            <img src="/assets/desktop-logo.png" alt="desktop logo" />
          </Link>
        </div>
        {/* end::logo */}

        {/* start::menus */}
        <div className="flex font-medium">
          {navbarItems.map((item) => (
            <NavLink
              to={item?.src}
              className="py-[25px] px-[34px] border-l-[2px] text-xl"
            >
              {item?.name}
            </NavLink>
          ))}
        </div>
        {/* end::menus */}

        {/* start::mobile menus */}
        <div className="hidden"></div>
        {/* eend::mobile menus */}
      </div>
    </div>
  );
};

export default Navbar;

const navbarItems = [
  { src: "/", name: "Home" },
  {
    src: "/about",
    name: "About Us",
  },
  {
    src: "/admissions",
    name: "Admissions",
  },
  {
    src: "/academics",
    name: "Academics",
  },
  {
    src: "/student-life",
    name: "Student LIfe",
  },
  {
    src: "/contact",
    name: "Contact",
  },
];
