import Benefits from "@/components/Homepage/Benefits/Benefits";
import Faqs from "@/components/Homepage/Faqs/Faqs";
import Hero from "@/components/Homepage/Hero";
import NavigateThroughPages from "@/components/Homepage/NavigateThroughPages/NavigateThroughPages";
import Testimonials from "@/components/Homepage/Testimonials/Testimonials";
import Container from "@/components/shared/Container";

const Homepage = () => {
  return (
    <Container>
      <Hero />
      <Benefits />
      <Testimonials />
      <Faqs />
      <NavigateThroughPages />
    </Container>
  );
};

export default Homepage;
