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
   await queryInterface.bulkInsert('Spots', [
    {
      ownerId: 1,
      address: '2830 Grant Avenue',
      city: 'San Francisco',
      state: 'California',
      country: 'United States',
      lat: 83.8903784,
      lng: -32.8545728,
      name: 'Suburban House',
      description: 'House next to the bay bridge',
      price: 90002.42
    },
  { 
    ownerId: 2,
      address: '4829 Windsor Drive',
      city: 'Tampa',
      state: 'Florida',
      country: 'United States',
      lat: 34.5839384,
      lng: -93.3927641,
      name: 'Beach House',
      description: 'House on the Beach',
      price: 45042.93
  },
  {
    ownerId: 3,
      address: '3824 Yoda Lane',
      city: 'Los Angels',
      state: 'California',
      country: 'United States',
      lat: 22.8937623,
      lng: -12.2121231,
      name: 'Apartment',
      description: 'Apartment in Downtown LA',
      price: 88883.23
  },
  {
    ownerId: 4,
      address: '9090 2nd Street',
      city: 'Houston',
      state: 'Texas',
      country: 'United States',
      lat: 66.3943293,
      lng: -11.1111902,
      name: 'Ranch',
      description: 'Large Ranch on a 15 acre field',
      price: 5523.23
  },

  
  ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Spots', {
      name: { [Op.in]: ['Suburban House', 'Beach House', 'Apartment', 'Ranch'] }
    }, {})
  }
};
