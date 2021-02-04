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
    const vaccinations = [];
    // const defaultPassword  = bcrypt.hashSync('secret', 12);

    vaccinations.push(
      {   
        "id": 1,
        "did": "123456789",
        "vaccName": "Covid-19",
        "vaccSeq": "1",
        "vaccDate": "2021/02/10",
        "vaccCom": "서울 특별시 동작구 보건소",
        "vaccLoc": "서울 특별시 동작구",
        "vaccineName": "pfizer",
        "vaccineLot": "Us-1234",
        "manufacturer": "pfizer-BioNTech",
        "certNo": "a-000000000000001",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      }
    )
    vaccinations.push(
      {   
        "id": 2,
        "did": "123456789",
        "vaccName": "Covid-19",
        "vaccSeq": "2",
        "vaccDate": "2021/08/10",
        "vaccCom": "서울 특별시 동작구 보건소",
        "vaccLoc": "서울 특별시 동작구",
        "vaccineName": "pfizer",
        "vaccineLot": "Us-1234",
        "manufacturer": "pfizer-BioNTech",
        "certNo": "a-000000000000001",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      }
    )
    vaccinations.push(
      {   
        "id": 3,
        "did": "123456789",
        "vaccName": "B형",
        "vaccSeq": "1",
        "vaccDate": "2021/02/10",
        "vaccCom": "서울 특별시 동작구 보건소",
        "vaccLoc": "서울 특별시 동작구",
        "vaccineName": "테포비어",
        "vaccineLot": "Ko-1234",
        "manufacturer": "한미약품",
        "certNo": "b-000000000000001",
        "createdAt" : new Date(),
        "updatedAt" : new Date()
      }
    )

    await queryInterface.bulkInsert('vaccinations', vaccinations, {});
    console.log('vaccinations insert.');
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('vaccinations', null, {});
  }
};
