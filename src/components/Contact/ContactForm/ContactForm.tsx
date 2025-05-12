import SectionHeading from "@/components/shared/SectionHeading";
import SectionLayout from "@/components/shared/SectionLayout";
import ContactFormContent from "./ContactFormContent";

const ContactForm = () => {
  return (
    <SectionLayout>
      {/* start::section heading */}
      <SectionHeading
        badgeText="Contact Form"
        title="Student Information"
        subHeading="If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"
      />
      {/* end::section heading */}

      {/* start::contact form content */}
      <ContactFormContent />
      {/* end::contact form content */}
    </SectionLayout>
  );
};

export default ContactForm;
