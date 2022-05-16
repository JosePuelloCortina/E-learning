const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("buyClase", {
        status: {
            type: DataTypes.BOOLEAN,
        },
        courseId: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
    });
};


