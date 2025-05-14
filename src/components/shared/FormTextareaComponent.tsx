import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { contactFormValues } from "./FormFieldComponent";

interface FormTextareaComponentProps {
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
  rows?: number;
}

export const FormTextareaComponent = ({
  control,
  name,
  label,
  placeholder,
  rows = 6,
}: FormTextareaComponentProps) => {
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
            <Textarea
              placeholder={placeholder}
              className="p-5 xl:p-6 3xl:p-[30px] font-medium text-text-placeholder placeholder:text-text-placeholder 3xl:text-xl min-h-40 leading-[1.5]"
              rows={rows}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
