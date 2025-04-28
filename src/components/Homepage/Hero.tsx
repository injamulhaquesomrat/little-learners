const Hero = () => {
  return (
    <section className="w-full flex flex-col gap-10 pb-20">
      {/* start::hero image container */}
      <div className="w-full pt-[50px]">
        <img
          className="w-full h-auto"
          src="/assets/images/Hero/hero-img.jpg"
          alt="hero image"
        />
      </div>
      {/* end::hero image container */}

      {/* start::hero text container */}
      <div className="text-center">
        <div className="pb-10">
          <p className="font-medium border-b-[2px] border-border leading-loose w-fit mx-auto mb-2.5 text-grey-15">
            Welcome to Little Learners Academy
          </p>
          <h1 className="font-raleway text-[30px] font-extrabold text-ring leading-[1.3] mb-[1.125rem]">
            Where Young Minds Blossom and{" "}
            <span className="text-main">Dreams Take Flight.</span>
          </h1>
          <p>
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </p>
        </div>
        <div className="p-10 border-[2px] rounded-xl grid space-y-5 bg-secondary-background">
          <div>
            <h3 className="text-gray-15 text-[34px] font-extrabold">+7000</h3>
            <p className="font-medium text-grey-15">Students Passed Out</p>
          </div>
          <hr className="lg:hidden border-b" />
          <div>
            <h3 className="text-gray-15 text-[34px] font-extrabold">+37</h3>
            <p className="font-medium text-grey-15">Awards & Recognitions</p>
          </div>
          <hr className="lg:hidden border-b" />
          <div>
            <h3 className="text-gray-15 text-[34px] font-extrabold">+15</h3>
            <p className="font-medium text-grey-15">Experience Educators</p>
          </div>
        </div>
      </div>
      {/* end::hero text container */}
    </section>
  );
};

export default Hero;
