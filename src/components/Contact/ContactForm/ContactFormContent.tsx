import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormFieldComponent } from "@/components/shared/FormFieldComponent";
import { FormSelectComponent } from "@/components/shared/ContactSelectConponent";
import { FormTextareaComponent } from "@/components/shared/FormTextareaComponent";
import { FormRow } from "@/components/shared/FormRow";
import { contactFormSchema } from "@/schemas/contactFormSchema";
import { socialItems } from "@/fakedata/socialItems";
import { Link } from "react-router";

const ContactFormContent = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      parentName: "",
      email: "",
      phone: "",
      studentName: "",
      studentAge: "",
      message: "",
      program: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log(values);
  }
  return (
    <div className="p-6 pt-16 pb-[30px] xs:p-[30px] xs:pt-16 lg:p-10 xl:p-20 3xl:p-[100px] bg-white border-2 border-border shadow-light-shadow rounded-[10px] relative">
      <ul className="flex gap-5 xl:gap-3.5 absolute -top-[24px] 3xl:-top-8 left-1/2 -translate-x-1/2">
        {socialItems.map((item) => (
          <Link to={item?.link} key={item?.id}>
            <li className="h-[58px] lg:h-12 3xl:h-[74px] w-[74px] md:w-20 xl:w-32 3xl:w-[154px] flex justify-center items-center bg-foreground rounded border-2 border-border">
              <img
                className="xl:size-6 3xl:size-8.5"
                src={item?.icon}
                alt={item?.name}
              />
            </li>
          </Link>
        ))}
      </ul>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-[30px] xl:space-y-10 3xl:space-y-[50px]"
        >
          {/* start::parent name and email */}
          <FormRow>
            <FormFieldComponent
              control={form.control}
              name="parentName"
              label="Parent Name"
              placeholder="Enter Parent Name"
            />
            <FormFieldComponent
              control={form.control}
              name="email"
              label="Email Address"
              placeholder="Enter Email Address"
            />
          </FormRow>
          {/* end::parent name and email */}

          {/* start::phone and student name */}
          <FormRow>
            <FormFieldComponent
              control={form.control}
              name="phone"
              label="Phone Number"
              placeholder="Enter Phone Number"
            />
            <FormFieldComponent
              control={form.control}
              name="studentName"
              label="Student Name"
              placeholder="Enter Student Name"
            />
          </FormRow>
          {/* end::phone and student name */}

          {/* start::student age and program of interest selection */}
          <FormRow>
            <FormFieldComponent
              control={form.control}
              name="studentAge"
              label="Student Age"
              placeholder="Enter Student Age"
            />
            <FormSelectComponent
              control={form.control}
              name="program"
              label="Program of Interest"
              placeholder="Select a program"
              options={[
                { label: "Language Arts", value: "language arts" },
                { label: "Mathematics", value: "mathematics" },
                { label: "Science", value: "science" },
                { label: "Social Studies", value: "social studies" },
                { label: "Arts and Crafts", value: "Arts and Crafts" },
                { label: "Physical Education", value: "Physical Education" },
              ]}
            />
          </FormRow>
          {/* end::student age and program of interest selection */}

          {/* start::message textarea */}
          <FormTextareaComponent
            control={form.control}
            name="message"
            label="Message"
            placeholder="Enter Message"
          />
          {/* end::message textarea */}

          {/* submit button */}
          <Button
            type="submit"
            variant={"noShadow"}
            className="w-full cursor-pointer text-lg xl:text-xl 3xl:text-2xl font-medium text-border bg-navlink hover:bg-main transition-all duration-300 ease-in-out h-15 xl:h-20 3xl:h-24 rounded-xl"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactFormContent;
