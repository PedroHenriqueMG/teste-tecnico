import { Request, Response } from "express";
import { User } from "../schemas/userSchema";
import { BadRequest } from "../helpers/api-erros";
import { v4 as uuidv4 } from "uuid";

let user: User[] = [];

export class UserController {
  async create(req: Request, res: Response) {
    const { name, email, age } = req.body;

    const userExist = user.find((user) => user.email == email);

    if (userExist) {
      throw new BadRequest("Este usuário ja existe.");
    }

    const newUser = {
      id: uuidv4(),
      name: name,
      email: email,
      age: age,
    };

    user.push(newUser);

    res.status(201).json(newUser);
  }
  async list(req: Request, res: Response) {
    res.json(user);
  }
}
