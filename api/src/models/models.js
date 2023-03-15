const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('projects',{
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    id_user:{
      type: DataTypes.STRING,
      allowNull:false
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    title:{
      type:DataTypes.STRING,
      allowNull: false
    },
    description:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull: true
    },
    completed:{
      type:DataTypes.BOOLEAN,
      allowNull:true
    },
    deleted:{
      type:DataTypes.BOOLEAN,
      allowNull:false
    },
    location:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },{timestamps:false});
  sequelize.define('user',{
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },{timestamps:false});
  sequelize.define('type',{
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },
    typename:{
      type:DataTypes.STRING
    }
  },{timestamps:false});
  sequelize.define('person',{
    id:{
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name:{
      type:DataTypes.STRING,
      allowNull: false
    },
    lastname:{
      type:DataTypes.STRING,
      allowNull:false
    },
    bankinfo:{
      type:DataTypes.STRING,
      allowNull:true
    },
/*     description:{
      type:DataTypes.STRING,
      allowNull:false
    }, */
 /*    address:{
      type:DataTypes.STRING,
      allowNull:false
    }, */
    phonenumber:{
      type:DataTypes.STRING,
      allowNull:false
    },
    city:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },{timestamps:false})
};


		 
	
	
