const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {

        name: {
            type: DataTypes.STRING,

        },

        email: {
            type: DataTypes.STRING,
            
        }
        //atributos
    })
}