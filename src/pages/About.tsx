import Acheivements from "@/components/About/Acheivements/Acheivements";
import MissionVision from "@/components/About/MissionVision/MissionVision";
import Container from "@/components/shared/Container";
import PageHero from "@/components/shared/PageHero";

const About = () => {
  return (
    <Container>
      <PageHero
        badgeText={"Overview"}
        heading={"Welcome to Little Learners Academy"}
        subHeading={
          "A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
        }
      />
      <MissionVision />
      <Acheivements />
    </Container>
  );
};

export default About;
