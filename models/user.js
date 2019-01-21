const mongoose = require("mongoose");


const User = mongoose.model("Users", new mongoose.Schema({
    userName : {
        type: "String",
    },
    email: {
        type: "String",
        unique: true
    },
    password: {
       type: "String"
    }
   }));

   exports.User = User;