import { subjectItems } from "@/fakedata/subjectItems";
import SubjectCard from "./SubjectCard";

const SubjectsContent = () => {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10 3xl:gap-[50px]">
      {subjectItems.map((subject) => (
        <SubjectCard key={subject?.id} subject={subject} />
      ))}
    </div>
  );
};

export default SubjectsContent;
