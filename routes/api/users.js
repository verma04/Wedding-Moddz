const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const nodemailer = require("nodemailer");

// Load User model
const User = require("../../models/User");
const Vendor = require("../../models/Vednor");

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

  Vendor.findOne({ email: req.body.email }).then(vendor => {
    if (vendor) {
      return res.status(400).json({ email: "Email already exists" });
    }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: "user"
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});
});


router.post("/vednorregister", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

   console.log(req.body.category)

     

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
    if (user.role === 'Vendor') {
        return res.status(400).json({ email: "Email already exists as vendor try another" });
      }
      else  if (user.role === 'admin') {
        return res.status(400).json({ email: "Envalid email" });
      }
      else {
        return res.status(400).json({ email: "Email already exists" });
      }
    }
  
    
    else {
      
            
      User.findOne({ phone: req.body.phone }).then(user => {
        if (user) {
          return res.status(400).json({ phone: "phone already exists" });
        }
        var val = Math.floor(1000 + Math.random() * 9000);
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: "Vendor",
        phone:req.body.phone,
        city:req.body.city,
        VendorCategory:req.body.category,
        otp:val
      
      });

     // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
     

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'vermapankaj619@gmail.com', // here use your real email
          pass: 'Garbh@619' // put your password correctly (not in this question please)
        }
      })
      
      var mailOptions = {
        from: 'WedddingMoodz',
        to:  'pankaj.k@amakein.com',
        subject: 'EatWell security alert: Sign-in from new device detected',
        html: "  <style>div { background-color: coral; }</style><div class='dd' >  <h1>Welcome to WeddingMoodz </h1><h2>Your one times Email Verfictaion OTP</h2> <p>43221</p> </div>"  + val,
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

     
     
    });
    }
  });

});
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
           else {
          
             
            if (user.role === "Vendor") {
              return res.status(404).json({ emailnotfound: "Email Regsiter as Vendor try Another" });
            }
                console.log(user.role)
  // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          role: user.role
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
   }
  });
  
});

router.post("/VednorLogin", (req, res) => {
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
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
  
   else {
    
    if( user.role === 'user'){
      return res.status(404).json({ emailnotfound: "Email Regsiter as User" });
    }

    else if (user.role === 'admin' ) {
      return res.status(404).json({ emailnotfound: "Invalid  Email" });
    }


    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          email:user.email,
          role: user.role,
          Verfictaion:user.Emaillverified
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
  }
  
  });
});

router.get("/getCity",  

(req, res) => {
  



  User.findOne({ _id:'5fd0cf7953415b2214b359af' }).then(user => {

    res.json(user.cities)
      

  });
  
 
  
  
  


});

router.get("/getCategoryHome",(req, res) => {
  



  User.findOne({ _id:'5fd0cf7953415b2214b359af' }).then(user => {

    res.json(user.category)
      

  });
  
 
  
  
  


});

module.exports = router;
