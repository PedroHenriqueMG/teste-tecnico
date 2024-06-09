import { createDocument } from "zod-openapi";

export const document = createDocument({
  openapi: "3.1.0",
  info: {
    title: "Teste Tecnico API",
    description: "API desenvolvida para teste tecnico da GoAnd Slay",
    version: "1.0.0",
  },
});
