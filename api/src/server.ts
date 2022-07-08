import express from 'express';
import connection from './database/db';
import router from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const isConnectionOk = async () => {
//   try {
//     await connection.authenticate();
//     console.log('conectado ao banco com sucesso');
//   } catch (error) {
//     console.log(error);
//   }
// };

// isConnectionOk();

app.use(router);

app.listen(3000, async () => {
  await connection.sync();
  console.log('rodando na porta 3000');
});
