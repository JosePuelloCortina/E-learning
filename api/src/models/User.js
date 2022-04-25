const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {

        name: {
            type: DataTypes.STRING,

        },

        email: {
            type: DataTypes.STRING,
            
        },

        email1: {
            type: DataTypes.STRING,
            
        },

        
        email2: {
            type: DataTypes.STRING,
            
        },

        //atributos
    })
}