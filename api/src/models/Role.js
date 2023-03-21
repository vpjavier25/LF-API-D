const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("donation",
        {
            admin: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            user: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            community: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        { timestamps: false }
    );
}