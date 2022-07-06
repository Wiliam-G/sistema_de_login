import express, { Request, Response } from 'express';
import connection from './database/db';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const isConnectionOk = async () => {
  try {
    await connection.authenticate();
    console.log('conectado ao banco com sucesso');
  } catch (error) {
    console.log(error);
  }
};

isConnectionOk();

app.get('/', (req: Request, res: Response) => {
  res.send('test');
});

app.listen(3000, async () => {
  await connection.sync({ force: true });
  console.log('rodando na porta 3000');
});
