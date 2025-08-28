import { z } from "zod";

// Create a function to generate schema with translated messages
export const createContactFormSchema = (t: (key: string) => string) =>
  z.object({
    name: z
      .string()
      .min(2, t("form.validation.nameMin"))
      .max(50, t("form.validation.nameMax")),
    email: z
      .string()
      .email(t("form.validation.emailInvalid"))
      .min(1, t("form.validation.emailRequired")),
    phone: z
      .string()
      .min(10, t("form.validation.phoneMin"))
      .max(20, t("form.validation.phoneMax"))
      .regex(/^[\+]?[0-9\s\-\(\)]+$/, t("form.validation.phoneInvalid")),
    subject: z
      .string()
      .min(5, t("form.validation.subjectMin"))
      .max(100, t("form.validation.subjectMax")),
    message: z
      .string()
      .min(10, t("form.validation.messageMin"))
      .max(1000, t("form.validation.messageMax")),
  });

export type ContactFormData = z.infer<
  ReturnType<typeof createContactFormSchema>
>;
