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
        <FormItem>
          <FormLabel className="text-xl text-[#4C4C4C] font-semibold">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              className="p-5 font-medium text-[var(--grey-35)] placeholder:text-[var(--grey-35)] h-16 leading-[1.5]"
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
