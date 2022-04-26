const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo //anotar todas las caracteristicas que trae de la api 
  //y poner allowNull false a los campos obligatorios(validación)
  sequelize.define('Courses', {
    name: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    idInstructor: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true
      },
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    
  });
};