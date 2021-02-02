'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.createTable(
      'activities', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        contact_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          unique: false
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          unique: false
        },
        type_cd: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        status_cd: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        description: {
          type: Sequelize.STRING(1023),
          allowNull: true,
          unique: false
        },
        start_date: {
          type: Sequelize.DATE,
          allowNull: true
        },
        end_date: {
          type: Sequelize.DATE,
          allowNull: true
        },
        due_date: {
          type: Sequelize.DATE,
          allowNull: true
        },
        duration: {
          type: Sequelize.INTEGER,
          allowNull: true,
          unique: false
        },
        description: {
          type: Sequelize.STRING,
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

  down: (queryInterface, Sequelize) => { // eslint-disable-line no-unused-vars
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return queryInterface.dropTable('activities');
  }
};
