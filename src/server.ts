import Express from "express";
import { route } from "./routes";

const api = Express();
api.use(Express.json());

api.use(route);

api.listen(process.env.PORT, () => {
  console.log(`API rodando na porta: ${process.env.PORT}`);
});
