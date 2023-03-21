const { DataTypes, STRING } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('info',{
    name:{
        type: DataTypes.STRING,
        allowNull: true
    },
    description:{
        type: DataTypes.STRING,
        allowNull: true
    },
    location:{
        type: DataTypes.STRING,
        allowNull: true
    },
    postProject:{
        type: DataTypes.STRING,
        allowNull: true
    }
    
  })
}