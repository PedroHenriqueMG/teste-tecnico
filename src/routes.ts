import { Router, Request, Response } from "express";
import { validate } from "./middleware/zod-middleware";
import { createUserSchema } from "./schemas/userSchema";
import { UserController } from "./controller/userController";

export const route = Router();

route.get("/", (req: Request, res: Response) => {
  res.send("funcionou");
});

route.post("/users", validate(createUserSchema), new UserController().create);
route.get("/users", new UserController().list);
