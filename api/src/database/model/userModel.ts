// eslint-disable-next-line import/no-unresolved, linebreak-style
import { DataTypes } from 'sequelize/types';
import connection from '../db';

export const UserModel = connection.define('user', {

  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
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
