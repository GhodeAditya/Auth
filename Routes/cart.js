const express = require("express");
const router = express.Router();
const {Cart} = require("../models/cartModel");


router.post("/", async(req, res) =>{
   const cart = new Cart({
       email: req.body.email,
       productId: req.body.productId
    });
    const data = await user.save();
    res.send(data);
});

router.get("/", async(req, res)=>{
    let data = await Product.find();
    res.send(data);
});
module.exports = router;