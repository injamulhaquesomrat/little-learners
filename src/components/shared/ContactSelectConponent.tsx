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
        <FormItem className="gap-2.5 xl:gap-3.5 3xl:gap-5">
          <FormLabel className="text-xl 3xl:text-[22px] text-[#4C4C4C] font-semibold">
            {label}
          </FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger className="p-5 xl:p-6 3xl:p-[30px] w-full h-16 xl:h-18 3xl:h-[90px] font-medium text-text-placeholder text-base 3xl:text-xl bg-secondary-background cursor-pointer">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-secondary-background">
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem
                    className="w-full h-16 xl:h-18 3xl:h-[90px] font-medium text-text-placeholder text-base 3xl:text-xl bg-secondary-background hover:bg-highlight cursor-pointer border-1"
                    key={option.value}
                    value={option.value}
                  >
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
