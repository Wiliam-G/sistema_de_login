import { Request, Response } from 'express';
import UserModel from '../database/model/userModel';

class UserController {
  async register(req: Request, res: Response) {
    const { Email, Password } = req.body;
    try {
      const user = await UserModel.findOne({ where: { Email } });
      if (user === null) {
        const newUser = await UserModel.create({
          Email, Password,
        });
        res.status(201).send({ 'Usuário criado com sucesso': newUser });
      } else {
        res.status(409).send({ 'Erro: ': 'O email informado já possui um cadastro' });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async login(req: Request, res: Response) {
    const { Email, Password } = req.body;
    const user = await UserModel.findOne({ attributes: ['Email', 'Password'], where: { Email } });

    if (user === null) {
      res.status(204).send('Usuário não encontrado');
    } else if (Password === user.toJSON().Password) {
      res.status(200).send(user.toJSON().Email);
    }
  }
}

export default new UserController();
