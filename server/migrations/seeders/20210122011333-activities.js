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
    const activities = [];
    // const defaultPassword  = bcrypt.hashSync('secret', 12);

    activities.push(
      {
        "id" : 1,
        "contact_id" : 2,
        "user_id" : 3,
        "type_cd" : "as",
        "status_cd" : "as",
        "description" : "as",
        "start_date" : "2021-01-22T01:08:34.691Z",
        "end_date" : "2021-01-22T01:08:37.525Z",
        "due_date" : "2021-01-22T01:08:40.948Z",
        "duration" : 12,
        "createdAt" : "2021-01-22T01:08:50.354Z",
        "updatedAt" : "2021-01-22T01:08:55.815Z"
      }                  
    )

    await queryInterface.bulkInsert('activities', activities, {});
    console.log('activities insert.');
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('activities', null, {});
  }
};
