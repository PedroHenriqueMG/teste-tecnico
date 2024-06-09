import Express from "express";

const api = Express();
api.use(Express.json());

api.listen(process.env.PORT, () => {
  console.log(`API rodando na porta: ${process.env.PORT}`);
});
