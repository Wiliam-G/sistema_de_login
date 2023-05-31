require('dotenv').config();
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

   // rota pública
   async home(req, res) {
      return res.status(200).json("Bem vindo!");
   },


   // rota privada
    async getUser(req, res) {
      const id = req.params.id;

      // checa se o usuário existe
      const user = await User.findByPk(id);

      if(!user) {
         return res.status(404).json({ msg: "Usuário não encontrado!" });
      } 

      return res.status(200).json({ user: user.user_name });
    },
    
    async checkToken(req, res, next) {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(" ")[1]

      if(!token) {
         return res.status(401).json({ msg: "Acesso negado!" });
      }

      try {
         const secret = process.env.SECRET;

         jwt.verify(token, secret);

         next();
      } catch(erro) {
         res.status(400).json({ msg: "Token inválido!" });
      }
    },

    async register(req, res) {
        const { user_name, password, confirmPassword } = req.body;

        // validações no registro do usuário
        if (user_name.length < 5) {
         return res.status(400).json("O nome de usuário deve conter pelo menos 5 caracteres");
        }

        if (password.length < 4) {
         return res.status(401).json("A senha deve conter pelo menos 4 caracteres");
        }

        if (password != confirmPassword) {
         return res.status(401).json("As senhas não batem.");
        }

        // checa se já existe um usuário com o username informado
        const registeredUser = User.findOne({ where: {user_name }})
        if(registeredUser) {
         return res.json("Usuário já existe");
        }

        const salt = 12;
        const passwordHash = await bcrypt.hash(password, salt);
        const user = await User.create({ user_name, password: passwordHash });

        return res.json(user);
     },

     async log_in(req, res) {
        const { user_name, password } = req.body;

        const user = await User.findOne({ where: { user_name }});

        // o password retornado por user.password é um hash
        const match = await bcrypt.compare(password, user.password);

        if(match) {
         try {
            const secret = process.env.SECRET;
            const token = jwt.sign({
               id: user.id,
            },
            secret,
            );

            res.status(200).json({
               msg: "Autenticação realizada com sucesso!", token
            });

         } catch(error) {
            console.log(error);
            res.status(500).json({
               msg: "Aconteceu um erro no servidor, tente novamente mais tarde!"
            });
         }
        } else {
         return res.status(401).send("Senha incorreta!");
        }

     }
};