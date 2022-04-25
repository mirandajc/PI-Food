const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull:false
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false
    },

    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    aggregateLikes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    healthScore:{
      type:DataTypes.INTEGER,
      allowNull:false
    },

    instruction:{
      type: DataTypes.TEXT,
      allowNull:false
    },

  });

};

