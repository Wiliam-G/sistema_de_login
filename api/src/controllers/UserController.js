const User = require('../models/Users');

module.exports = {
    async store(req, res) {
        const { user_name, password } = req.body;

        const user = await User.create({ user_name, password })

        return res.json(user);
     }
}