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
        name: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        position: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        avatar: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        email: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        company_email: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        website: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        phone: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        secondary_phone: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        address: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        favorite: {
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

    return queryInterface.dropTable('contacts');
  }
};
