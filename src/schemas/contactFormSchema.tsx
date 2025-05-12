import { z } from "zod";

export const contactFormSchema = z.object({
  parentName: z
    .string()
    .min(2, { message: "Parent name must be at least 2 characters." }),
  email: z.string().email({ message: "Enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  studentName: z
    .string()
    .min(2, { message: "Student name must be at least 2 characters." }),
  studentAge: z
    .string()
    .regex(/^\d+$/, { message: "Student age must be a valid number." }),
  program: z.string().min(1, { message: "Please select a program." }),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters long." }),
});
