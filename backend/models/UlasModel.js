import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Ulas = db.define(
  "ulas",
  {
    name: {
      type: DataTypes.STRING,
    },
    pesan: {
      type: DataTypes.TEXT,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);
export default Ulas;
