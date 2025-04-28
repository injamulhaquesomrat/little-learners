import { Link } from "react-router";

const Logo = () => {
  return (
    <>
      <Link to={"/"} className="focus-visible:outline-0">
        <img
          className="hidden 3xl:block"
          src="/assets/desktop-logo.svg"
          alt="desktop logo"
        />
        <img
          className="hidden lg:block 3xl:hidden"
          src="/assets/laptop-logo.svg"
          alt="laptop logo"
        />
        <img
          className="lg:hidden"
          src="/assets/mobile-logo.svg"
          alt="mobile logo"
        />
      </Link>
    </>
  );
};

export default Logo;
