module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("QuizRuns", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      quiz_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      started_on: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable("QuizRuns");
  },
};
