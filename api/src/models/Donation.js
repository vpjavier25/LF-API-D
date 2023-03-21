const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("donation",
        {
            id: {
              type: DataTypes.UUID,
              primaryKey: true,
              defaultValue: DataTypes.UUIDV4,
            },
            monto: {
              type: DataTypes.STRING,
              allowNull: false,
            },
          },
          { timestamps: true }
    )
}