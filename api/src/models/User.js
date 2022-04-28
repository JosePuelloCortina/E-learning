const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        id :{
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
 
        email: {
            type: DataTypes.STRING,
            allowNull: false,            
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,             
        }, 

        Image: {
            type: DataTypes.TEXT,
                        
        }, 

    })
}