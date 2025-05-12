import ContactForm from "@/components/Contact/ContactForm/ContactForm";
import Container from "@/components/shared/Container";
import PageHero from "@/components/shared/PageHero";

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
      <ContactForm />
    </Container>
  );
};

export default Contact;
