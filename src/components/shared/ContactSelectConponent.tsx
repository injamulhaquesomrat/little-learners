import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Control } from "react-hook-form";
import { contactFormValues } from "./FormFieldComponent";

interface Option {
  label: string;
  value: string;
}

interface FormSelectComponentProps {
  control: Control<contactFormValues>;
  name:
    | "parentName"
    | "email"
    | "phone"
    | "studentName"
    | "studentAge"
    | "program";
  label: string;
  placeholder: string;
  options: Option[];
}

export const FormSelectComponent = ({
  control,
  name,
  label,
  placeholder,
  options,
}: FormSelectComponentProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-xl text-[#4C4C4C] font-semibold">
            {label}
          </FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger className="w-full mt-2.5 h-16 font-medium text-[var(--grey-35)] text-base bg-secondary-background">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
