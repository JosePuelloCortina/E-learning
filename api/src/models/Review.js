const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('review', {
        id :{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false, 
            primaryKey: true,
        },
        idCourse: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        coment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        reported: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
 
    })
}