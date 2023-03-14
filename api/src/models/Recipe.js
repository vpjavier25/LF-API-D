const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dietName: {
      type: DataTypes.ENUM('gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan', 'paleolithic', 'primal', 'whole 30', 'pescatarian', 'ketogenic','fodmap friendly', 'vegetarian'),
      allowNull: false,
    },    
  },
  {timestamps: false}
  )
};


		 
	
	
