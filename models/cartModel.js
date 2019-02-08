const mongoose = require("mongoose");


const Cart = mongoose.model("Cart", new mongoose.Schema({
    email : {
        type: "String",
    },
    productID: {
        type: "String",
    }
   }));

   exports.Cart = Cart;