const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ListSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  img: {
    type: String,
   
  },
  address: {
    type: String,
   
  },
  pincode: {
    type: String,
   
  },
  aboutus:{
    type: String,
  },
  //Veneue
  
  venueType:{
    type: String,
  },
  spacePrefenence:{
    type: String,
  },
  totalguests:{
    type: Number,
  },
   PriceStartingFrom:{
    type: Number,
  },
  
  //Wedding-Caterers
  
  categoryCaterers:{
    type: String,
  },
   typeCaterers:{
    type: String,
  },
  priceCaterers:{
    type: String,
  },
  capacityCaterers:{
    type:String,
  },
  
  costCaterers:{
    type: String,
  },
  
  //Wedding-Pandits
  
  panditCharge:{
    type: String,
  },
   panditLanguage:{
    type: String,
  },
  panditkundlis:{
    type: String,
  },
  panditSamagri:{
    type:String,
  },
  
  panditExperince:{
    type: String,
  },
  panditcostTravel: {
    type: String,
  },
  
  
  //WeddingDecorators
  
  decoratorsChargers:{
    type: String,
  },
  
  //mehndi
  mehndiCharge: {
    type: Number,
  },
  
  //jewellery
  jewellerySpecialty: {
    type: String,
  }
  
  ,
  
  //DJ&Sound
  musicCategory: {
    type: String,
  },
  musicExperince: {
    type: String,
  },
  musicPrice: {
    type: String,
  },
  musicMember: {
    type: String,
  },
  
  //PhotoGrapher
  photographersCategory: {
    type: String,
  },
  photographersExperince: {
    type: String,
  },
  photographersPrice: {
    type: String,
  },
  photographersPackage: {
    type: String,
  },
  
  
  //WeddingInvitaions
  WeddingInvitaionsShipping: {
    type: String,
  },
  WeddingInvitaionsRange: {
    type: String,
  },
  WeddingInvitaionsBox: {
    type: String,
  },
  WeddingInvitaionsPicies: {
    type: String,
  }
  ,
  
  //BRIDALYEAR
   bridalestablishment: {
    type: String,
  },
  bridalwearoutfits : {
    type: String,
  },
  bridalPriceRange: {
    type: String,
  },
  
  
  //GROOM
  groomestablishment: {
    type: String,
  },
  groomwearoutfits : {
    type: String,
  },
  groomPriceRange: {
    type: String,
  },
});

module.exports = List = mongoose.model("lists", ListSchema);
