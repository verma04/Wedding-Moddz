const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const Vendor = require("../../models/Vednor");
const User = require("../../models/User");




// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
   if ( user ) {
    return res.status(400).json({ email: "Email Register As User use another" });
   }

  Vendor.findOne({ email: req.body.email }).then(vendor => {
    if (vendor) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newVendor = new Vendor({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: "vendor"
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newVendor.password, salt, (err, hash) => {
          if (err) throw err;
          newVendor.password = hash;
          newVendor
            .save()
            .then(vendor=> res.json(vendor))
            .catch(err => console.log(err));
        });
      });
    }
  });
});
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
  console.log(req.body)

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  Vendor.findOne({ email }).then(vendor=> {
    // Check if user exists
    if (!vendor) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password,  vendor.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: vendor.id,
          name: vendor.name,
          role: vendor.role
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn:         31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});


router.post("/verifyOtp" ,  passport.authenticate('jwt', { session: false }), (req, res)   => {
  
  const { value1, value2, value3, value4} = req.body;

  const otp =  parseInt(value1 + value2+ value3+ value4)
  console.log( typeof otp)

  User.findOne({ _id: req.user.id }).then(vendor => {

    if (vendor.Emaillverified ==="verfied") {
      return res.status(400).json({ email: "Account is alredy verfied" });
    } else {
         if( vendor.otp === otp ){
          User.findOneAndUpdate({ _id: req.user.id } , { $set: { "Emaillverified":"verfied" , "otp": ""}}).then(vendor => {

              res.json(vendor.Emaillverified)

          });
        

         }
         else {
          return res.status(400).json({ phone: "otp is Invalid" });
         }
    }
  });
  
 

});


router.get("/getVerfication" ,  passport.authenticate('jwt', { session: false }), (req, res)   => {
  

  User.findOne({ _id: req.user.id }).then(vendor => {

     res.json(vendor.Emaillverified)
  
  });
  
 

});










module.exports = router;
