import { Router } from "express";
import { validate } from "./middleware/zod-middleware";
import { createUserSchema } from "./schemas/userSchema";
import { UserController } from "./controller/userController";
import swaggerUi from "swagger-ui-express";
import { document } from "./swagger/swagger";

export const router = Router();

//swagger
router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(document));

//user routes
router.post("/users", validate(createUserSchema), new UserController().create);
router.get("/users", new UserController().getAll);
router.get("/users/:id", new UserController().getOne);
router.put(
  "/users/:id",
  validate(createUserSchema),
  new UserController().update
);
router.delete("/users/:id", new UserController().delete);
