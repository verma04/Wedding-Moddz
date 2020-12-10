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
const Admin = require("../../models/Admin");





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

  Admin.findOne({ email: req.body.email }).then(admin => {
    if (admin) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newAdmin  = new Admin ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: "admin"
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
          if (err) throw err;
          newAdmin.password = hash;
          newAdmin 
            .save()
            .then(Admin => res.json(Admin))
            .catch(err => console.log(err));
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
  Admin.findOne({ email }).then(admin=> {
    // Check if user exists
    if (!admin) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, admin.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: admin.id,
          name: admin.name,
          role: admin.role
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




router.get("/getCity",   passport.authenticate('jwt', { session: false }),

(req, res) => {
  

  console.log(req.user.cities)


});

router.post("/postCity",   passport.authenticate('jwt', { session: false }),

(req, res) => {
  
  const data = {
   city:req.body.city
  }
  User.findOne({_id: req.user.id},function(err, doc){
    if (err) {
      console.log(err)
    }
    else {
     const persons =  doc.cities;

      if(persons.some(person => person.city ===  req.body.city)){
        return res
        .status(400)
        .json({ city: "City exsit" });
    } else{
        console.log("Object not found.");
    
  User.findOneAndUpdate({_id: req.user.id}, {$push: { "cities": data  }},function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }

   res.json(doc.cities);
    
});
    }
    }
});


});


router.get("/getCatgory",   passport.authenticate('jwt', { session: false }),

(req, res) => {
  

  res.json(req.user.category)


});

router.post("/postCategory",   passport.authenticate('jwt', { session: false }),

(req, res) => {
  console.log(req.body)
  
  const data = {
    category:req.body.category
  }
 User.findOne({_id: req.user.id},function(err, doc){
    if (err) {
      console.log(err)
    }
    else {
     const persons =  doc.category;

      if(persons.some(person => person.category ===  req.body.category)){
        return res
        .status(400)
        .json({ city: "Category exsit" });
    } else{
        console.log("Object not found.");
    
  User.findOneAndUpdate({_id: req.user.id}, {$push: { "category": data  }},function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }

   
    
});
    }
    }
    res.json(doc.category);
});


});



module.exports = router;
