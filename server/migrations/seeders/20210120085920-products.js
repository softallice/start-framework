/* eslint-disable no-console */

// const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => { // eslint-disable-line no-unused-vars

    /**
     * Products table
     */
    const products = [];
    // const defaultPassword  = bcrypt.hashSync('secret', 12);

    products.push({
      id: 1,
      text: 'jon@example.com',
      createdAt: new Date(),
      updatedAt:new Date()
    });
    products.push({
      id: 2,
      text: 'jane@example.com',
      createdAt: new Date(),
      updatedAt:new Date()
    });

    await queryInterface.bulkInsert('products', products, {});
    console.log('Products created.');

  },

  down: async (queryInterface, Sequelize) => { // eslint-disable-line no-unused-vars
    return await queryInterface.bulkDelete('products', null, {});
  }
};
