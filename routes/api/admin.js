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
const City  = require('../../models/City')
const Category = require('../../models/Category')



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
  

res.json(req.user.cities)


});

router.get("/getCityProfile/:id",   passport.authenticate('jwt', { session: false }),

(req, res) => {
  
  User.findOne({role: "admin"},function(err, doc){
    // console.log(doc.cities)

    const arr = doc.cities.filter(item => item.cityslug === req.params.id  );
    console.log(arr)

    res.json(arr[0])

  })


});

router.get("/deleteCity/:id",   passport.authenticate('jwt', { session: false }),

(req, res) => {
  console.log(req.params.id)
  
  // User.findOne({role: "admin"},function(err, doc){
  //   // console.log(doc.cities)

  //   const arr = doc.cities.filter(item => item.cityslug === req.params.id  );
  //   console.log(arr)

  //   res.json(arr[0])

  // })
  User.findOneAndUpdate({  role:"admin"  }, {  $pull:  {"cities": {_id:req.params.id}}  },{ new: true, upsert: true },function(err, result) {
    
    if(err) {
      console.log(err);
  }
    
    
  User.findOne({role: "admin"},function(err, doc){
    // console.log(doc.cities)
       res.json(doc.cities)

  })


  
  })


});

router.post("/addCity",   passport.authenticate('jwt', { session: false }),

(req, res) => {
  console.log(req.body)


    
  User.findOne({role: "admin"},function(err, doc){
    if (err) {
      console.log(err)
    }
    else {
   
    
     const persons =  doc.cities;

      if(persons.some(person => person.cityName ===  req.body.cityName)){
        return res
        .status(400)
        .json({ city: "City exsit" });
    } else{
      
    
  User.findOneAndUpdate({_id: req.user.id}, {$push: { "cities": req.body  }},function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }

  
    
});

User.findOne({role: "admin"},function(err, doc){
  // console.log(doc.cities)
     res.json(doc.cities)

})


    }
    }
});


});


router.get("/getCatgory",   passport.authenticate('jwt', { session: false }),

(req, res) => {
  

  Category.find({},function(err, doc){
    // console.log(doc.cities)

  res.json(doc)

  })




});

router.post("/addCategory",   passport.authenticate('jwt', { session: false }),

(req, res) => {
  console.log(req.body)
  Category.findOne({ category: req.body.category }).then( async category => {
    if (category) {
      return res.status(400).json({ categoryError: "Category already exists" });
    }
    else {
      const created = await Category.create(req.body);
      res.json(created)

      
    }
  });


});



router.get("/getvendor",  

(req, res) => {
 
  User.find({  }).then( async user => {
   
    
    const arr = user.filter(item => item.verified === "none"  );
     
    res.json(arr)
   
  });


});

router.get("/approveRequest/:id",    passport.authenticate('jwt', { session: false }),

async  (req, res) => {
  console.log(req.params.id)
  
  

    await User.findOneAndUpdate({_id:req.params.id} , {$set:{ verified: "done"  }}).then(booking => {
        console.log(booking)
       
      });

    
    await User.find({}).then(users => {
      const user  = users.reverse();

   res.json(user)
   });
   


});





module.exports = router;
