const mongoose = require("mongoose");


const Product = mongoose.model("Product", new mongoose.Schema({
    productTittle : {
        type: "String",
    },
    price: {
        type: "Number",
    },
    filePath: {
       type: "String"
    }
   }));

   exports.Product = Product;