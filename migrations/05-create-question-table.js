module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Questions", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      question_text: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      difficulty_level: {
        type: Sequelize.ENUM("easy", "medium", "hard"),
        allowNull: false,
        defaultValue: "medium",
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
    return queryInterface.dropTable("Questions");
  },
};
