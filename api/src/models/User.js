const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("user", {
    id: {
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

    image: {
      type: DataTypes.TEXT,
    },
    validated: {
      type: DataTypes.ENUM("true", "false"),
    },
    banned: {
      type: DataTypes.ENUM("true", "false"),
    },
    code: {
      type: DataTypes.UUID,
    },
    cbu: {
      type: DataTypes.TEXT,
    },

  });
};
