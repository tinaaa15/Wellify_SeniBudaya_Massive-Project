import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Akun = db.define(
    'akun', {
        nama:{
            type: DataTypes.STRING
        },
        namaPengguna:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        location:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        bio:{
            type: DataTypes.TEXT
        },
        profesi:{
            type: DataTypes.STRING
        },
        gambar:{
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
});

export default Akun;