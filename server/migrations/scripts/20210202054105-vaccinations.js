'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'vaccinations', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        did: {
          type: Sequelize.STRING(1000),
          allowNull: true,
          unique: false
        },
        vaccName: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        vaccSeq: {
          type: Sequelize.STRING(10),
          allowNull: true,
          unique: false
        },
        vaccDate: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        vaccCom: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        vaccLoc: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        vaccineName: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        vaccineLot: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        manufacturer: {
          type: Sequelize.STRING(100),
          allowNull: true,
          unique: false
        },
        certNo: {
          type: Sequelize.STRING(100),
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
    return queryInterface.dropTable('vaccinations');
  }
};
