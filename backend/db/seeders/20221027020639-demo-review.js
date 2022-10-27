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
   await queryInterface.bulkInsert('Reviews',[
    {
      spotId: 1,
      UserId: 2,
      review: 'Small House',
      stars: 3
    },
    {
      spotId: 2,
      UserId: 3,
      review: 'Nice House',
      stars: 4
    },
    {
      spotId: 3,
      UserId: 2,
      review: 'The House was very clean',
      stars: 5
    },
    {
      spotId: 1,
      UserId: 2,
      review: 'The House was dirty',
      stars: 2
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
      userId: { [Op.in]: [2, 3,] }
    }, {});
  }
};
