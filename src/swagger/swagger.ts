import { createDocument } from "zod-openapi";
import { z } from "zod";
import { createUserSchema, userSchema } from "../schemas/userSchema";

export const document = createDocument({
  openapi: "3.1.0",
  info: {
    title: "Teste Tecnico API",
    description: "API desenvolvida para teste tecnico da GoAnd Slay",
    version: "1.0.0",
  },
  paths: {
    "/users": {
      post: {
        tags: ["User"],
        requestBody: {
          required: true,
          content: {
            "application/json": { schema: createUserSchema },
          },
        },
        responses: {
          "400": {
            description: "Este usuário já existe.",
          },
          "201": {
            description: "201 Created",
            content: {
              "application/json": {
                schema: userSchema,
              },
            },
          },
        },
      },
      get: {
        tags: ["User"],
        responses: {
          "200": {
            description: "200 ok",
            content: {
              "application/json": {
                schema: z.array(userSchema),
              },
            },
          },
        },
      },
    },
    "/users/{id}": {
      get: {
        tags: ["User"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
          },
        ],
        responses: {
          "404": {
            description: "Usuário não encontrado.",
          },
          "200": {
            description: "200 ok",
            content: {
              "application/json": {
                schema: userSchema,
              },
            },
          },
        },
      },
      put: {
        tags: ["User"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": { schema: createUserSchema },
          },
        },
        responses: {
          "404": {
            description: "Usuário não encontrado.",
          },
          "200": {
            description: "200 ok",
            content: {
              "application/json": {
                schema: userSchema,
              },
            },
          },
        },
      },
      delete: {
        tags: ["User"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
          },
        ],
        responses: {
          "404": {
            description: "Usuário não encontrado.",
          },
          "204": {
            description: "204 content",
          },
        },
      },
    },
  },
});
