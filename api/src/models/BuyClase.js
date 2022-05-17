const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("buyClase", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        status: {
            type: DataTypes.BOOLEAN,
        },
        courseId: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
    });
};


