'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('ap_terms', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      terms_type_cd: {
        type: Sequelize.STRING(2),
        allowNull: true,
        unique: false,
      },
      terms_nm: { type: Sequelize.STRING(50), allowNull: true, unique: false },
      terms_ver: { type: Sequelize.STRING(4), allowNull: true, unique: false },
      essen_yn: { type: Sequelize.STRING(1), allowNull: true, unique: false },
      step_gbcd: { type: Sequelize.STRING(2), allowNull: true, unique: false },
      use_org_no: {
        type: Sequelize.STRING(10),
        allowNull: true,
        unique: false,
      },
      terms_conts: { type: Sequelize.TEXT, allowNull: true, unique: false },
      terms_conts_pdf: { type: Sequelize.BLOB, allowNull: true, unique: false },
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
    return queryInterface.dropTable('ap_terms');
  },
};
