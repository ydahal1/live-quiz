module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define("Question", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    difficulty_level: {
      type: DataTypes.ENUM("easy", "medium", "hard"),
      allowNull: false,
      defaultValue: "medium",
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Question;
};
