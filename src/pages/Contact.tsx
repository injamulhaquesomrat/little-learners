import PageHero from "@/components/shared/PageHero";
import { Container } from "lucide-react";

const Contact = () => {
  return (
    <Container>
      <PageHero
        badgeText={"Contact Us"}
        heading={"Feel Free To Connect With Us"}
        subHeading={
          "We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"
        }
      />
    </Container>
  );
};

export default Contact;
