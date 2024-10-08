module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("UserPreferences", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      avatar_url: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      prefer_audio: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      theme: {
        type: Sequelize.STRING(50),
        allowNull: true,
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
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable("UserPreferences");
  },
};
