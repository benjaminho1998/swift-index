'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      album: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      features: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.FLOAT
      },
      numberOfRatings: {
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER
      },
      karaoke: {
        type: Sequelize.FLOAT
      },
      party: {
        type: Sequelize.FLOAT
      },
      car: {
        type: Sequelize.FLOAT
      },
      study: {
        type: Sequelize.FLOAT
      },
      workout: {
        type: Sequelize.FLOAT
      },
      crying: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tracks');
  }
};