'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const contacts = [
      {
        id: 1,
        name: 'Pratik Patel',
        position: 'Developer',
        avatar: 'https://avatars2.githubusercontent.com/u/34883558?s=400&v=4',
        email: 'pratikpatelpp802@gmail.com',
        company_email: 'pratikpatelpp802@gmail.com',
        website: 'www.test.com',
        phone: '+9910101010',
        secondary_phone: '+9910101010',
        address: 'BB 101 Om Sai Residency Palsana',
        favorite: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Razvan Stoenescu',
        position: 'Developer',
        avatar: 'https://cdn.quasar.dev/team/razvan_stoenescu.jpeg',
        email: 'mailto:razvan@quasar.dev',
        company_email: 'mailto:razvan@quasar.dev',
        website: 'https://github.com/rstoenescu',
        phone: '+1-004-658-0042',
        secondary_phone: '(331) 009-4655 x3147',
        address: '92290 Lisa Cove',
        favorite: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Jeff Galbraith',
        position: 'Developer',
        avatar: 'https://cdn.quasar.dev/team/jeff_galbraith.jpg',
        email: 'mailto:jeff@quasar.dev',
        company_email: 'mailto:jeff@quasar.dev',
        website: 'http://jeffgalbraith.dev/',
        phone: '175.718.4633 x878',
        secondary_phone: '175.718.4633 x878',
        address: 'Calgary, Canada',
        favorite: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Brunhilde Panswick',
        position: 'Administrator',
        avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',
        email: 'test.@quasar.dev',
        company_email: 'test.@quasar.dev',
        website: 'http://test1.dev/',
        phone: '175.718.4633 x878',
        secondary_phone: '175.718.4633 x878',
        address: 'Calgary, Canada',
        favorite: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Winfield Stapforth',
        position: 'Administrator',
        avatar: 'https://cdn.quasar.dev/img/avatar6.jpg',
        email: 'test2.@quasar.dev',
        company_email: 'test.@quasar.dev',
        website: 'http://test2.dev/',
        phone: '175.718.4633 x878',
        secondary_phone: '175.718.4633 x878',
        address: 'Calgary, Canada',
        favorite: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
   await queryInterface.bulkInsert('contacts', contacts, {});
    console.log('contacts insert.');
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('contacts', null, {});
  }
};
