module.exports = (sequelize, DataTypes) => {
  const Option = sequelize.define("Option", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    option_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    is_correct: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    option_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  });
  return Option;
};
