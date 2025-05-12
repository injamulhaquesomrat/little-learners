import Container from "@/components/shared/Container";
import PageHero from "@/components/shared/PageHero";
import EventsNCelebrations from "@/components/StudentLife/EventsNCelebrations/EventsNCelebrations";
import ExtraCurricularActivities from "@/components/StudentLife/ExtraCurricularActivities/ExtraCurricularActivities";
import StudentSupport from "@/components/StudentLife/StudentSupport/StudentSupport";

const StudentLife = () => {
  return (
    <Container>
      <PageHero
        badgeText={"Enriching Student Life"}
        heading={"Embracing Learning with Discovery and Joy"}
        subHeading={
          "Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
        }
      />

      <ExtraCurricularActivities />
      <EventsNCelebrations />
      <StudentSupport />
    </Container>
  );
};

export default StudentLife;
