import "express-async-errors";
import Express from "express";
import { router } from "./routes";
import { errorMiddleware } from "./middleware/error-middleware";

const api = Express();
api.use(Express.json());

api.use(router);

api.use(errorMiddleware);
api.listen(process.env.PORT, () => {
  console.log(`API rodando na porta: ${process.env.PORT}`);
});
