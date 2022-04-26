const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('compra', {
        id :{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            unique: true,
            primaryKey: true,
            allowNull: false, 
        },

        descuento: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
        forma_de_pago: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    })
}