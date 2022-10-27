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
   await queryInterface.bulkInsert('ReviewImages', [
    {
      reviewId: 3,
      url: 'https://www.google.com/images/77'
    },
    {
      reviewId: 6,
      url: 'https://www.google.com/images/23'
    },
    {
      reviewId: 2,
      url: 'https://www.google.com/images/90'
    },
    {
      reviewId: 1,
      url: 'https://www.google.com/images/4'
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
    const Op = Sequelize.Op
    await queryInterface.bulkDelete('ReviewImages', {
      reviewId: { [Op.in]: [1, 2, 3, 6] }
    }, {});
  }
};
