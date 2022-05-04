const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("avatar", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
  });
};
