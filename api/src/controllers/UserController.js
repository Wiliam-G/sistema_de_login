const User = require('../models/Users');
const auth = require('./auth');
const bcrypt = require('bcrypt');

module.exports = {
    async store(req, res) {
        const { user_name, password } = req.body;
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