import { footerNavItems } from "@/fakedata/footerNavItems";
import Logo from "../Logo";

const Footer = () => {
  return (
    <div className="pt-10 px-4 2xl:px-0 pb-5">
      <div className="flex flex-col justify-between items-center container 2xl:w-[1339px] 3xl:w-[1819px] mx-auto border-2 rounded-xl overflow-hidden bg-white p-[30px] shadow-shadow">
        <div className="lg:grid lg:grid-cols-12 lg:gap-14">
          {/* start:: wesite information */}
          <div className="lg:col-span-4">
            <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
              <Logo />
              <p className="pt-4 text-[var(--grey-30)]">
                We believe in the power of play to foster creativity,
                problem-solving skills, and imagination.
              </p>
            </div>
            <ul className="flex flex-wrap gap-5 pt-10">
              <li>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-foreground rounded border-2 border-border flex justify-center items-center">
                    <img
                      src="/assets/icons/footer/email-icon.svg"
                      alt="email"
                    />
                  </div>
                  <div>hello@littlelearners.com</div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-foreground rounded border-2 border-border flex justify-center items-center">
                    <img
                      src="/assets/icons/footer/phone-icon.svg"
                      alt="phone"
                    />
                  </div>
                  <div>+91 91813 23 2309</div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-foreground rounded border-2 border-border flex justify-center items-center">
                    <img
                      src="/assets/icons/footer/location-icon.svg"
                      alt="location"
                    />
                  </div>
                  <div>Somewhere in the World</div>
                </div>
              </li>
            </ul>
          </div>
          {/* end:: wesite information */}

          {/* start:: footer navlinks */}
          <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:col-span-8 gap-x-[30px] gap-y-[50px] pt-10 lg:pt-0">
            {footerNavItems.map((footerItem) => (
              <ul
                key={footerItem?.id}
                className="flex flex-col gap-3.5 font-medium text-[var(--grey-20)]"
              >
                <li className="font-semibold">{footerItem?.heading}</li>
                {footerItem?.links.map((link) => (
                  <li key={link?.id}>{link?.label}</li>
                ))}
              </ul>
            ))}
          </div>
          {/* end:: footer navlinks */}
        </div>
        <div className="w-full ">
          {/* start::terms,privacy and social links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 py-4 mt-[30px] border-y">
            <ul className="flex gap-1.5 text-sm divide-x divide-black">
              <li className="pr-1.5">Terms of Service</li>
              <li className="pr-1.5">Privacy Policy</li>
              <li>Cookie Police</li>
            </ul>
            <ul className="flex gap-2.5">
              <li className="h-[44px] w-[44px] flex justify-center items-center bg-foreground rounded border-2 border-border">
                <img
                  src="/public/assets/icons/footer/facebook-icon.svg"
                  alt="facebook"
                />
              </li>
              <li className="h-[44px] w-[44px] flex justify-center items-center bg-foreground rounded border-2 border-border">
                <img
                  src="/public/assets/icons/footer/twitter-icon.svg"
                  alt="twitter"
                />
              </li>
              <li className="h-[44px] w-[44px] flex justify-center items-center bg-foreground rounded border-2 border-border">
                <img
                  src="/public/assets/icons/footer/linkedin-icon.svg"
                  alt="linkedin"
                />
              </li>
            </ul>
          </div>
          {/* end::terms,privacy and social links */}

          {/* start::copyright text */}
          <div className="pt-4">
            <p className="text-sm text-[var(--grey-40)] text-center leading-[1.5]">
              Copyright © [2023] Little Learners Academy. All rights reserved.
            </p>
          </div>
          {/* end::copyright text */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
