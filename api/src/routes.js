const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/users', UserController.register);
routes.post('/login', UserController.log_in);

module.exports = routes;