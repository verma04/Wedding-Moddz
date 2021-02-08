const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const CategorySchema = new Schema({

  category :{
    type: String,
    required: true,
  },
  categoryAvatar :{
    type: String,
    required: true,
  },
  categorySlug :{
    type: String,
    required: true,
  },

  categoryDescription:{
    type: String,
    required: true,
  },






});

module.exports = Category = mongoose.model("categories", CategorySchema);
