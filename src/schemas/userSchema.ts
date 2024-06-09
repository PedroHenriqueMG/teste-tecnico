import { z } from "zod";
import { extendZodWithOpenApi } from "zod-openapi";

extendZodWithOpenApi(z);

export const userSchema = z.object({
  id: z.string(),
  name: z.string().openapi({ example: "Pedro" }),
  email: z
    .string()
    .email("Email inválido.")
    .openapi({ example: "teste@gmail.com" }),
  age: z
    .number()
    .positive("Idade inválida.")
    .int("Idade inválida.")
    .openapi({ example: 22 }),
});

export const createUserSchema = userSchema.omit({ id: true });

export type User = z.infer<typeof userSchema>;
