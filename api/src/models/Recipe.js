const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    image: {
      type: DataTypes.STRING
    },

    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    healthyScore:{
      type: DataTypes.FLOAT
    },

    dishTypes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },

    steps: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },

    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
  
};

