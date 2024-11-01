import { z } from 'zod';

export const formSchema = z
  .object({
    password: z
      .string({ message: "Senha obrigatória" })
      .min(8, { message: "Mínimo 8 caracteres" })
      .refine((data) => data.trim() !== "", { message: "Senha obrigatória" })
      .refine((password) => /[A-Z]/.test(password), {
        message: "A senha deve conter pelo menos uma letra maiúscula",
      })
      .refine((password) => /[a-z]/.test(password), {
        message: "A senha deve conter pelo menos uma letra minúscula",
      })
      .refine((password) => /\d/.test(password), {
        message: "A senha deve conter pelo menos um número",
      })
      .refine((password) => /[!@#$%^&*(),.?":{}|<>]/g.test(password), {
        message: "A senha deve conter pelo menos um caractere especial",
      }),
    confirmPassword: z
      .string({ message: "Confirmar senha obrigatória" })
      .refine((data) => data.trim() !== "", {
        message: "Confirmar senha obrigatória",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem",
    path: ["confirmPassword"],
  });

  export type FormSchemaType = z.infer<typeof formSchema>