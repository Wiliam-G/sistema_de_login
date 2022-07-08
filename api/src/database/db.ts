import dotenv from 'dotenv';
import { Dialect, Sequelize } from 'sequelize';

dotenv.config();
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbDriver = process.env.DB_DRIVER as Dialect;
const dbPassword = process.env.DB_PASSWORD;

const connection = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: dbDriver,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
});

export default connection;
