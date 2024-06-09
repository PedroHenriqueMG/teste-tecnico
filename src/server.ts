import Express from "express";
import { route } from "./routes";
import { errorMiddleware } from "./middleware/error-middleware";

const api = Express();
api.use(Express.json());

api.use(route);

api.use(errorMiddleware);
api.listen(process.env.PORT, () => {
  console.log(`API rodando na porta: ${process.env.PORT}`);
});
