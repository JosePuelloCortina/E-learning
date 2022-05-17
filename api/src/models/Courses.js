const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo //anotar todas las caracteristicas que trae de la api 
  //y poner allowNull false a los campos obligatorios(validación)
  sequelize.define('course', {

    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        unique: true,
        primaryKey: true,
        allowNull: false, 
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    duration: {
        type: DataTypes.STRING,
        // allowNull: true,
        
    },

    progress: {
        type: DataTypes.STRING,
        // allowNull: true,       
    },

    review: {
        type: DataTypes.FLOAT,
        // allowNull: true,
    },
    
    image: {
        type: DataTypes.TEXT,
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    deshabilitar: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "aprobado",
      },

      state: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "passed",
      },
      commentary: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },

    
  });
};