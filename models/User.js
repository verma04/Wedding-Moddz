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
  Emaillverified : {
    type: String,
    default:"none"
  },
  otp: {
    type:Number
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
    required: true
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
      city :{
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
          
          subcategory: [
            {
              subcategory :{
                type: String,
                required: true,
                  
              },
            
          },
        ]
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
}






});

module.exports = User = mongoose.model("users", UserSchema);
