const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('category', {
        id :{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false, 
        },

        name: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true,
            // allowNull: true,
        }

    })
}