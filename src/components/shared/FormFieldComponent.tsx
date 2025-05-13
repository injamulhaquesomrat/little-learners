import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

export interface contactFormValues {
  parentName: string;
  email: string;
  phone: string;
  studentName: string;
  studentAge: string;
  message: string;
  program: string;
}

interface FormFieldProps {
  control: Control<contactFormValues>;
  name:
    | "parentName"
    | "email"
    | "phone"
    | "studentName"
    | "studentAge"
    | "message"
    | "program";
  label: string;
  placeholder: string;
}

export const FormFieldComponent = ({
  control,
  name,
  label,
  placeholder,
}: FormFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="gap-2.5 xl:gap-3.5 3xl:gap-5">
          <FormLabel className="text-xl 3xl:text-[22px] text-[#4C4C4C] font-semibold">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              className="p-5 xl:p-6 3xl:p-[30px] font-medium text-[var(--grey-35)] placeholder:text-[var(--grey-35)] 3xl:text-xl h-16 xl:h-18 3xl:h-[90px] leading-[1.5]"
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
