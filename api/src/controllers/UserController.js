const User = require('../models/Users');
const auth = require('./auth');
const bcrypt = require('bcrypt');

module.exports = {
    async register(req, res) {
        const { user_name, password, confirmPassword } = req.body;

        // validações no registro do usuário
        if (user_name.length < 5) {
         return res.send("O nome de usuário deve conter pelo menos 5 caracteres");
        }

        if (password.length < 4 || confirmPassword.length < 4) {
         return res.send("A senha deve conter pelo menos 4 caracteres")
        }

        if (password != confirmPassword) {
         return res.json("As senhas não batem.")
        }

        // checa se já existe um usuário com o username informado
        const registeredUser = User.findOne({ where: {user_name }})
        if(registeredUser) {
         return res.send("Usuário já existe");
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
        const match = await bcrypt.compare(password, user.password)

        if(match) {
         return res.send(user.user_name);
        } else {
         return res.send("Senha incorreta!");
        }

     }
};