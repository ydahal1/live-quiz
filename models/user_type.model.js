module.exports = (sequelize, DataTypes) => {
  const UserType = sequelize.define("UserType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return UserType;
};
