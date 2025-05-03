import { Link } from "react-router";
import Logo from "../Logo";
import FooterMenus from "./FooterMenus";
import SocialLinks from "./SocialLinks";
import Copyright from "./Copyright";
import ContactInfo from "./ContactInfo";

const Footer = () => {
  return (
    <div className="px-4 2xl:px-0 pb-5 xl:pb-10 3xl:pb-[50px]">
      <div className="flex flex-col justify-between items-center container 2xl:w-[1339px] 3xl:w-[1819px] mx-auto border-2 rounded-xl overflow-hidden bg-white p-[30px] pt-[60px] lg:p-14 lg:pb-8 xl:p-20 xl:pb-10 3xl:pt-[100px] 3xl:px-[113px] shadow-shadow">
        <div className="lg:grid lg:grid-cols-12 3xl:grid-cols-9 lg:gap-14 3xl:gap-20 lg:justiify-between">
          {/* start:: wesite information */}
          <div className="lg:col-span-4 3xl:col-span-3">
            <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
              <Logo />
              <p className="pt-4 text-[var(--grey-30)] 3xl:text-xl">
                We believe in the power of play to foster creativity,
                problem-solving skills, and imagination.
              </p>
            </div>

            {/* start:: contact information */}
            <ContactInfo />
            {/* end:: contact information */}
          </div>
          {/* end:: wesite information */}

          {/* start:: footer navlinks */}
          <FooterMenus />
          {/* end:: footer navlinks */}
        </div>

        <div className="w-full ">
          {/* start::terms,privacy and social links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 py-4 lg:py-5 3xl:py-[30px] mt-[30px] lg:mt-10 3xl:mt-[50px] border-y">
            <ul className="flex gap-1.5 lg:gap-2.5 3xl:gap-4 text-sm lg:text-base 3xl:text-xl divide-x divide-black text-center">
              <li className="pr-1.5 lg:pr-2.5 3xl:pr-4">
                <Link to="/terms-and-conditions">Terms of Service</Link>
              </li>
              <li className="pr-1.5 lg:pr-2.5 3xl:pr-4">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookies-policy">Cookies Policy</Link>
              </li>
            </ul>
            {/* start::social links */}
            <SocialLinks />
            {/* end::social links */}
          </div>
          {/* end::terms,privacy and social links */}

          {/* start::copyright */}
          <Copyright />
          {/* end::copyright */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
