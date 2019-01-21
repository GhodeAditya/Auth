const express = require("express");
const router = express.Router();
const config = require("config");
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const {User} = require("../models/user");
const jwt = require("jsonwebtoken");

router.get("/", async(req, res)=>{
    let data = await User.find();
    res.send(data);
});


router.post("/", async(req, res) =>{
    let user = await User.findOne({email: req.body.email});
    if(!user){
       return res.status(400).send("Invalid email or password.");
    }
   const validPassword = await bcrypt.compare(req.body.password, user.password);
   if(!validPassword){
    return res.status(400).send("Invalid email or password.");
   }
  
   const token = jwt.sign({name: user.userName}, "jwtPrivatekey", {expiresIn:  "2m"});
   const userName =  user.userName;

   const data = {
       "token": token, 
       "userName": userName
   }
   res.send(JSON.stringify(data));

});


module.exports = router;