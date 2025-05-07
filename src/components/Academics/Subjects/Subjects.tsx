import SectionHeading from "@/components/shared/SectionHeading";
import SectionLayout from "@/components/shared/SectionLayout";
import SubjectsContent from "./SubjectsContent";

const Subjects = () => {
  return (
    <SectionLayout>
      {/* start::section heading */}
      <SectionHeading
        badgeText={"Our Features"}
        title={"What Student Learn"}
        subHeading={`At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include`}
      />
      {/* end::section heading */}

      {/* start::subjects content */}
      <SubjectsContent />
      {/* end::subjects content */}
    </SectionLayout>
  );
};

export default Subjects;
