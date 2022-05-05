const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('review', {
        id :{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false, 
        },

        coment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
 
    })
}