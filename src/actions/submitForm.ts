"use server";

import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(1, "El nombre debe tener al menos 1 caracter"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof FormSchema>;

type SubmitResult = {
  success: boolean;
  error?: string;
  errors?: Record<string, string[]>;
};

export async function submitForm({
  name,
  email,
  message,
}: FormData): Promise<SubmitResult> {
  const validatedFields = FormSchema.safeParse({ name, email, message });

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Validación fallida",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log("Formulario recibido:", validatedFields.data);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}
