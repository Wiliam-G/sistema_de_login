require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(4000);
console.log('escutando na porta 4000');