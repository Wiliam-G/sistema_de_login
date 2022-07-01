import express, { Request , Response } from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
    res.send('test');
});

app.listen(3000, () => {
    console.log('rodando na porta 3000');
});