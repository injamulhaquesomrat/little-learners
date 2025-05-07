import SectionHeading from "@/components/shared/SectionHeading";
import SectionLayout from "@/components/shared/SectionLayout";

const Team = () => {
  return (
    <SectionLayout>
      {/* start::section heading*/}
      <SectionHeading
        badgeText="Our Teachers With Experties"
        title="Our Team Members"
        subHeading="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
      />
      {/* end::section heading*/}

      {/* start::team content */}
      <div></div>
      {/* end::team content */}
    </SectionLayout>
  );
};

export default Team;
