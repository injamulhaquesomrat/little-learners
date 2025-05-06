import { hallOfFame } from "@/fakedata/hallOfFame";
import { cn } from "@/lib/utils";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-5 xl:gap-10 2xl:gap-[50px] 3xl:gap-[60px] pb-20 xl:pb-[150px] 3xl:pb-[200px]">
      {/* start::hero image container */}
      <div className="w-full lg:w-1/2 pt-[50px] xl:pt-[60px] 3xl:pt-20">
        <img
          className="w-full h-auto bg-background"
          src="/assets/images/Hero/hero-img.png"
          alt="hero image"
        />
      </div>
      {/* end::hero image container */}

      {/* start::hero text container */}
      <div className="text-center lg:text-left lg:w-1/2">
        <div className="pb-10 lg:pb-5 xl:pb-10">
          <p className="font-medium xl:text-lg 3xl:text-[22px] border-b-[2px] border-border leading-loose w-fit mx-auto lg:mx-0 mb-2.5 text-grey-15">
            Welcome to Little Learners Academy
          </p>
          <h1 className="font-raleway text-3xl xl:text-[40px] 3xl:text-[54px] font-extrabold text-ring leading-[1.3] mb-[1.125rem] max-w-[450px] lg:max-w-full mx-auto lg:mx-0">
            Where Young Minds Blossom and{" "}
            <span className="text-main">Dreams Take Flight.</span>
          </h1>
          <p className="3xl:text-xl">
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </p>
        </div>

        {/* start::hall of fame counter */}
        <div className="p-10 lg:p-5 xl:p-10 3xl:px-[50px] 3xl:py-6 border-2 rounded-xl grid sm:grid-cols-3 gap-y-5 md:gap-2.5 bg-secondary-background shadow-secondary-shadow">
          {hallOfFame.map((item) => (
            <div key={item?.id}>
              <div className="pb-5">
                <h3 className="text-gray-15 text-[34px] lg:text-3xl xl:text-[34px] font-extrabold leading-[1.5]">
                  <CountUp
                    start={0}
                    end={item?.count}
                    duration={5}
                    decimals={0}
                    prefix="+"
                  />
                </h3>
                <p className="font-medium text-grey-15">{item?.subject}</p>
              </div>
              <hr
                className={cn(`sm:hidden border-b`, item?.id === 3 && "hidden")}
              />
            </div>
          ))}
        </div>
        {/* end::hall of fame counter */}
      </div>
      {/* end::hero text container */}
    </section>
  );
};

export default Hero;
