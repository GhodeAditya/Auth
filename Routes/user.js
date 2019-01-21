const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const _ = require("lodash");
const bcrypt = require("bcryptjs");
 const {User} = require("../models/user");


router.get("/", async(req, res)=>{
    let data = await User.find();
    res.send(data);
});


router.post("/", async(req, res) =>{
    let user = await User.findOne({email: req.body.email});
    if(user){
       return res.status(400).send("user already registered");
    }
      user = new User({
       userName : req.body.userName,
       email: req.body.email,
       password: req.body.password 
   });
   const salt = await bcrypt.genSalt(10);
   user.password = await bcrypt.hash(user.password, salt);
   await user.save();
  res.send( _.pick(user, ["userName", "email"]));
});




module.exports = router;