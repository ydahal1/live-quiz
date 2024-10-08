module.exports = (sequelize, DataTypes) => {
  const QuizRun = sequelize.define("QuizRun", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quiz_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    started_on: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return QuizRun;
};
