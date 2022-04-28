const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('buy', {
        id :{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            unique: true,
            primaryKey: true,
            allowNull: false, 
        },

        discount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
        pay_method: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    })
}