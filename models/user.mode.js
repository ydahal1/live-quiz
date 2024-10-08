module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    fName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    last_logged: {
      type: DataTypes.DATE,
    },
  });
  return User;
};
