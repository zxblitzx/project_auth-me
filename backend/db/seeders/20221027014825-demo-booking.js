'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Bookings', [
    {
      spotId: 1,
      userID: 2,
      startDate: '2021-3-2',
      endDate: '2022-10-3'
    },
    {
    spotId: 2,
      userID: 3,
      startDate: '2020-2-15',
      endDate: '2022-11-5'
    },
    {
      spotId: 3,
      userID: 4,
      startDate: '2019-9-23',
      endDate: '2021-12-18'
    },
    {
      spotId: 5,
      userID: 5,
      startDate: '2021-6-12',
      endDate: '2022-4-18'
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Bookings', {
      userId: { [Op.in]: [2, 3, 4, 5] }
    }, {});
  }
};
