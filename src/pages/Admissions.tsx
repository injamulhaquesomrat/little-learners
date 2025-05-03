import Container from "@/components/shared/Container";
import PageHero from "@/components/shared/PageHero";

const Admissions = () => {
  return (
    <Container>
      <PageHero
        badgeText={"Admission"}
        heading={"Join Our Family of Young Learners "}
        subHeading={
          "At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
        }
      />
    </Container>
  );
};

export default Admissions;
