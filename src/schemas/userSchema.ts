import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().positive("Idade incorreta.").int("Idade incorreta."),
});
