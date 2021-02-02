'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'cardinfos', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: Sequelize.STRING(1000),
          allowNull: true,
          unique: false
        },
        type: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        img: {
          type: Sequelize.STRING(1000),
          allowNull: true,
          unique: false
        },
        text: {
          type: Sequelize.STRING(1000),
          allowNull: true,
          unique: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        }
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cardinfos');
  }
};
