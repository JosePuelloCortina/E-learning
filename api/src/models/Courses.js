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
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },

    duration: {
        type: DataTypes.NUMBER,
        allowNull: false,
        
    },

    progreso: {
        type: DataTypes.STRING,
        allowNull: false,
            
    },

    reseña: {
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