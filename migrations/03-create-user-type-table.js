module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("UserTypes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      type_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable("UserTypes");
  },
};
