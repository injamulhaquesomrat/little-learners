import SectionLayout from "../../shared/SectionLayout";
import SectionHeading from "../../shared/SectionHeading";
import AdmissionProcessContent from "./AdmissionProcessContent";

const AdmissionProcess = () => {
  return (
    <SectionLayout>
      {/* start::section heading */}
      <SectionHeading
        badgeText={"Process"}
        title={"Admission Process"}
        subHeading={`Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school`}
      />
      {/* end::section heading */}

      {/* start::admission process content */}
      <AdmissionProcessContent />
      {/* end::admission process content */}
    </SectionLayout>
  );
};

export default AdmissionProcess;
