import { Request, Response } from "express";
import { User } from "../schemas/userSchema";
import { BadRequest, NotFound } from "../helpers/api-erros";
import { v4 as uuidv4 } from "uuid";

let user: User[] = [];

export class UserController {
  create(req: Request, res: Response) {
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
  getAll(req: Request, res: Response) {
    res.json(user);
  }
  getOne(req: Request, res: Response) {}
  delete(req: Request, res: Response) {
    const { id } = req.params;

    const userIndex = user.findIndex((user) => user.id == id);

    if (userIndex == -1) {
      throw new NotFound("Usuário não encontrado.");
    }

    user.splice(userIndex, 1);

    res.status(204).send();
  }
}
