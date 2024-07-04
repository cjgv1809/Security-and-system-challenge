"use server";

import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(1, "El nombre debe tener al menos 1 caracter"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof FormSchema>;

export type SubmitResult = {
  success: boolean;
  error?: string;
  errors?: Record<string, string[]>;
};

async function validateFormData(formData: FormData): Promise<SubmitResult> {
  const validatedFields = FormSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Validación fallida",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return { success: true };
}

export async function submitForm(formData: FormData): Promise<SubmitResult> {
  const validation = await validateFormData(formData);

  if (!validation.success) {
    return validation; // Return validation errors
  }

  console.log("Formulario recibido y validado:", formData);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}
