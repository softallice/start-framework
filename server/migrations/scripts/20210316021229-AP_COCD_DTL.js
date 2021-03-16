'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('ap_cocd_dtl', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cocd_grp_cd: {
        type: Sequelize.STRING(4),
        allowNull: true,
        unique: false,
      },
      cocd: { type: Sequelize.STRING(4), allowNull: true, unique: false },
      cocd_nm: { type: Sequelize.STRING(100), allowNull: true, unique: false },
      dscr: { type: Sequelize.STRING(100), allowNull: true, unique: false },
      etc_conts_1: {
        type: Sequelize.STRING(100),
        allowNull: true,
        unique: false,
      },
      etc_conts_2: {
        type: Sequelize.STRING(100),
        allowNull: true,
        unique: false,
      },
      etc_conts_3: {
        type: Sequelize.STRING(100),
        allowNull: true,
        unique: false,
      },
      use_yn: { type: Sequelize.STRING(1), allowNull: true, unique: false },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ap_cocd_dtl');
  },
};
