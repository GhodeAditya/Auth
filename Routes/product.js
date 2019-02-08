const express = require("express");
const router = express.Router();
const {Product} = require("../models/product");
const multer  = require('multer')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      let extArray = file.mimetype.split("/");
      let extension = extArray[extArray.length - 1];
      cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
    }
  })
  const upload = multer({ storage: storage })


router.post("/",  upload.single('recfile'), async(req, res) =>{
  
   const user = new Product({
       productTittle : req.body.name,
       productID: Math.floor(Math.random() * 100), 
       price: req.body.price,
       filePath: req.file.path
    });
    const data = await user.save();
    res.send(data);
});


router.get("/", async(req, res)=>{
    let data = await Product.find();
    res.send(data);
});
module.exports = router;