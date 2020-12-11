const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
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
});

module.exports = User = mongoose.model("users", UserSchema);
