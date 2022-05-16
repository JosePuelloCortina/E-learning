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
            allowNull: true,
        },
        
        pay_method: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        total_price:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        courseName:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        payed:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        commission: {
            type: DataTypes.DECIMAL,
            defaultValue: 20,
        }

    })
}