const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CitySchema = new Schema({
    cityDescription: {
    type: String,
    required: true
  },
  cityName: {
    type: String,
    required: true
  },
  cityimg: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  cityslug: {
    type: String,
  },




});

module.exports = Admin = mongoose.model("cities", CitySchema);
