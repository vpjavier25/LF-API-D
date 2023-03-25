const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("user", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV1
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: true
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: true
        },
        hash:{
            type: DataTypes.STRING,
            allowNull: true
        },
        salt:{
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {timestamps: false})
}