require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('./database');

const app = express();
app.use(express.json());

app.use(cors());
app.use(routes);



app.listen(4000);
console.log('escutando na porta 4000');