
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

    sequelize.define('order', {
        userId:{  
            type: DataTypes.UUID,
            allowNull: false
        },
        courseId:{  
            type: DataTypes.UUID,
            allowNull: false
        },
        status:{  
            type: DataTypes.ENUM('created', 'processing', 'cancelled', 'completed'),
            allowNull: false
        },
        payment_id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
        },
        payment_status:{
            type: DataTypes.STRING,
            defaultValue: ""
        },
        merchant_order_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
        }
    });
};