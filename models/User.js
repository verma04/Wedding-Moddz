const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
  
  },
  vendorName: {
    type: String,
  
  },


  email: {
    type: String,
    required: true
  },
 
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
   role: {
    type: String,
  },
  phone: {
    type: Number,
  
  },

    VendorCategory: {
      type: String,
     
    } ,

    verified : {
      type: String,
      default:"none"
    }
  
   ,
  city: {
    type: String,
   
  }
,

  cities: [
    {
      cityName :{
        type: String,
        required: true
      },
      cityslug: {
        type: String,
        required: true
      },
      cityimg: {
        type: String,
        required: true
      },

      cityDescription: {
        type: String,
        required: true
      },
      

    
    
  },
  ],
  category: [
    {
      category :{
        type: String,
        required: true,
      },
      categoryCity :{
        type: String,
        required: true,
      },
    
  },



]
,
  value:{
    type: String,
  }
  ,

img: {
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
pricePerPlate:{
  type: Number,
},
restroom:{
  type: Number,
},
policy:{
  type: String,
}
,
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

module.exports = User = mongoose.model("users", UserSchema);
