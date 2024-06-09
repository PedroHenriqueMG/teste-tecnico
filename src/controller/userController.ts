import { Request, Response } from "express";

interface User {
  name: string;
  email: string;
  age: number;
}

let user: User[] = [];

export class UserController {
  async create(req: Request, res: Response) {
    res.json("funcionou");
  }
  async list(req: Request, res: Response) {
    res.json(user);
  }
}
