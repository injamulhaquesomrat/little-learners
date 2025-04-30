import Benefits from "@/components/Homepage/Benefits/Benefits";
import Hero from "@/components/Homepage/Hero";
import Testimonials from "@/components/Homepage/Testimonials/Testimonials";
import Container from "@/components/shared/Container";

const Homepage = () => {
  return (
    <Container>
      <Hero />
      <Benefits />
      <Testimonials />
    </Container>
  );
};

export default Homepage;
