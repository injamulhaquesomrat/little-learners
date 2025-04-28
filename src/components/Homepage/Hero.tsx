const Hero = () => {
  return (
    <section className="w-full flex flex-col gap-10">
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
      <div>
        <div>
          <span>Welcome to Little Learners Academy</span>
          <h1>
            Where Young Minds Blossom and <span>Dreams Take Flight.</span>
          </h1>
          <p>
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </p>
        </div>
        <div>
          <div>
            <h3>+7000</h3>
            <p>Students Passed Out</p>
          </div>
          <hr />
          <div>
            <h3>+37</h3>
            <p>Awards & Recognitions</p>
          </div>
          <hr />
          <div>
            <h3>+15</h3>
            <p>Experience Educators</p>
          </div>
        </div>
      </div>
      {/* end::hero text container */}
    </section>
  );
};

export default Hero;
