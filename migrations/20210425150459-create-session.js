'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Session', {
      sid: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      userId: Sequelize.UUID,
      expires: Sequelize.DATE,
      data: Sequelize.TEXT,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Session');
  }
};