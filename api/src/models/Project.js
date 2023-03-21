const { DataTypes, STRING } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('project',{
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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
    Location:{
      type: DataTypes.STRING,
      allowNull: false
    },
    cost:{
      type: DataTypes.STRING,
      allowNull: true
    },
    currentAmount:{
      type: DataTypes.STRING,
      defaultValue: "0"
    },
    status:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "wait approval"
    },
    completed:{
      type:DataTypes.BOOLEAN,
      allowNull:true
    },
    deleted:{
      type:DataTypes.BOOLEAN,
      allowNull:true
    }
  },{timestamps:false});
}

		 
	
	
