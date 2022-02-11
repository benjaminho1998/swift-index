'use strict';

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

    await queryInterface.bulkInsert(
      'Tracks', 
      [
        {
          title: 'You Belong With Me',
          album: 'Fearless',
          genre: 'pop',
          features: null,
          rating: 4.9,
          numberOfRatings: 282,
          year: 2008,
          karaoke: 96.7,
          party: 92.2,
          car: 89.8,
          study: 39.4,
          workout: 46.9,
          crying: 59.3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'All Too Well',
          album: 'Red',
          genre: 'country pop',
          features: null,
          rating: 4.5,
          numberOfRatings: 756,
          year: 2012,
          karaoke: 83.8,
          party: 24.5,
          car: 79.5,
          study: 56.4,
          workout: 19.0,
          crying: 95.2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Blank Space',
          album: '1989',
          genre: 'pop',
          features: null,
          rating: 4.4,
          numberOfRatings: 424,
          year: 2014,
          karaoke: 81.4,
          party: 69.4,
          car: 90.0,
          study: 33.1,
          workout: 46.9,
          crying: 40.9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Cardigan',
          album: 'Folklore',
          genre: 'folk pop',
          features: null,
          rating: 3.6,
          numberOfRatings: 2032,
          year: 2020,
          karaoke: 46.2,
          party: 32.2,
          car: 83.2,
          study: 82.4,
          workout: 26.9,
          crying: 89.3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Willow',
          album: 'Evermore',
          genre: 'folk pop',
          features: null,
          rating: 2.5,
          numberOfRatings: 182,
          year: 2020,
          karaoke: 41.7,
          party: 45.2,
          car: 74.8,
          study: 19.4,
          workout: 13.9,
          crying: 78.3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], 
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return await queryInterface.bulkDelete('Tracks', null, {});
  }
};
