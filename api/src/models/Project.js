const { DataTypes, STRING } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('project',{
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull: false
    },
    location:{
      type: DataTypes.STRING,
      allowNull: false
    },
    cost:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cost_currency:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Dólares"
    },
    currentAmount:{
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    currentAmount_currency:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Dólares"
    },
    status:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "wait approval"
    },
    completed:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: false
    },
    deleted:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: false
    }
  },{timestamps:false});
}