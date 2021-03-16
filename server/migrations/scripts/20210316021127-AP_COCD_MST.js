'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('ap_cocd_mst', {
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
      cocd_grp_nm: {
        type: Sequelize.STRING(100),
        allowNull: true,
        unique: false,
      },
      dscr: { type: Sequelize.STRING(100), allowNull: true, unique: false },
      up_cocp_grp_cd: {
        type: Sequelize.STRING(4),
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
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AP_COCD_MST');
  },
};
