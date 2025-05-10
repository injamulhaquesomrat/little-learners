import ProcessCard from "./ProcessCard";

const AdmissionProcessContent = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-y-20 3xl:gap-y-[100px]">
      {admissionProcessItems.map((process) => (
        <ProcessCard key={process?.id} process={process} />
      ))}
    </div>
  );
};

export default AdmissionProcessContent;

const admissionProcessItems = [
  {
    id: 1,
    name: "Inquiry",
    details:
      "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
  },
  {
    id: 2,
    name: "School Tour",
    details:
      "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
  },
  {
    id: 3,
    name: "Application Form",
    details:
      "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
  },
  {
    id: 4,
    name: "Parent Interview",
    details:
      "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.",
  },
  {
    id: 5,
    name: "Student Assessment",
    details:
      "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
  },
  {
    id: 6,
    name: "Acceptance",
    details:
      "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.",
  },
];
