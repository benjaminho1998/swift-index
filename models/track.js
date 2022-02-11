'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Track.init({
    title: DataTypes.STRING,
    album: DataTypes.STRING,
    genre: DataTypes.STRING,
    features: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    numberOfRatings: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    karaoke: DataTypes.FLOAT,
    party: DataTypes.FLOAT,
    car: DataTypes.FLOAT,
    study: DataTypes.FLOAT,
    workout: DataTypes.FLOAT,
    crying: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Track',
  });
  return Track;
};