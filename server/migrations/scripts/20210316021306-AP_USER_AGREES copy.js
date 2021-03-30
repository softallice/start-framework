'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('ap_user_agrees', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: true,
        unique: false,
      },
      terms_type_cd: {
        type: Sequelize.STRING(2),
        allowNull: true,
        unique: false,
      },
      terms_ver: { 
        type: Sequelize.STRING(4), 
        allowNull: true, 
        unique: false 
      },
      use_yn: { 
        type: Sequelize.STRING(1), 
        allowNull: true, 
        unique: false 
      },
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
    return queryInterface.dropTable('ap_user_agrees');
  },
};
