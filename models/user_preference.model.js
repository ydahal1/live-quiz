module.exports = (sequelize, DataTypes) => {
  const UserPreference = sequelize.define("UserPreference", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    avatar_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    prefer_audio: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    theme: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  });
  return UserPreference;
};
