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
      'contacts', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        first_name: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        last_name: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        title: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        email: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        phone: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        status_cd: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false,
          defaultValue: "active"
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

    return queryInterface.dropTable('contacts');
  }
};
