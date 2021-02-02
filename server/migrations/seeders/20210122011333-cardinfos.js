'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const cardinfos = [];
    // const defaultPassword  = bcrypt.hashSync('secret', 12);

    cardinfos.push(
      {   
          "id": 1,
          "img": "https://placeimg.com/500/300/nature?t=1",
          "type": "free",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "title": "Title 1",
          "createdAt" : "2021-01-22T01:08:50.354Z",
          "updatedAt" : "2021-01-22T01:08:55.815Z"
      }
    )
    cardinfos.push(
      {   
          "id": 2,
          "img": "https://placeimg.com/500/300/nature?t=2",
          "type": "free",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "title": "Title 2",
          "createdAt" : "2021-01-22T01:08:50.354Z",
          "updatedAt" : "2021-01-22T01:08:55.815Z"
      }
    )
    cardinfos.push(
      {   
          "id": 3,
          "img": "https://placeimg.com/500/300/nature?t=3",
          "type": "free",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "title": "Title 3",
          "createdAt" : "2021-01-22T01:08:50.354Z",
          "updatedAt" : "2021-01-22T01:08:55.815Z"
      }
    )
    cardinfos.push(
      {   
          "id": 4,
          "img": "https://placeimg.com/500/300/nature?t=4",
          "type": "free",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "title": "Title 4",
          "createdAt" : "2021-01-22T01:08:50.354Z",
          "updatedAt" : "2021-01-22T01:08:55.815Z"
      }
    )
    cardinfos.push(
      {   
          "id": 5,
          "img": "https://placeimg.com/500/300/nature?t=5",
          "type": "free",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "title": "Title 5",
          "createdAt" : "2021-01-22T01:08:50.354Z",
          "updatedAt" : "2021-01-22T01:08:55.815Z"
      }
    )
    cardinfos.push(
      {   
          "id": 6,
          "img": "https://placeimg.com/500/300/nature?t=6",
          "type": "free",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "title": "Title 6",
          "createdAt" : "2021-01-22T01:08:50.354Z",
          "updatedAt" : "2021-01-22T01:08:55.815Z"
      }
    )

    await queryInterface.bulkInsert('cardinfos', cardinfos, {});
    console.log('cardinfos insert.');
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('cardinfos', null, {});
  }
};
