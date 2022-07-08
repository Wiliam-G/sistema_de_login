import { Request, Response } from 'express';
import UserModel from '../database/model/userModel';

class UserController {
  async register(req: Request, res: Response) {
    const { Email, Password } = req.body;
    const user = await UserModel.create({
      Email, Password,
    });
    return res.status(201).json(user);
  }
}

export default new UserController();
