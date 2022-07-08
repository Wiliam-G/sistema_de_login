// eslint-disable-next-line import/no-unresolved, linebreak-style
import { DataTypes } from 'sequelize';
import connection from '../db';

export const UserModel = connection.define('user', {

  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default UserModel;
