import Features from "@/components/Academics/Features/Features";
import Gallery from "@/components/Academics/Gallery/Gallery";
import Subjects from "@/components/Academics/Subjects/Subjects";
import Container from "@/components/shared/Container";
import PageHero from "@/components/shared/PageHero";

const Academics = () => {
  return (
    <Container>
      <PageHero
        badgeText={"Academics"}
        heading={"Nurturing Young Minds for Success"}
        subHeading={
          "Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
        }
      />

      <Features />
      <Subjects />
      <Gallery />
    </Container>
  );
};

export default Academics;
