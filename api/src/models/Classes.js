const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo //anotar todas las caracteristicas que trae de la api 
  //y poner allowNull false a los campos obligatorios(validación)
  sequelize.define('Classes', {
    name: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    duration:{
    type: DataTypes.STRING,
    allowNull: false,
    },
    contenido:{
    type: DataTypes.STRING,
    allowNull: false,
    },
    url:{
        type: DataTypes.STRING,
        allowNull: false,
        },
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    
  });
};