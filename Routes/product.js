const express = require("express");
const router = express.Router();
const {Product} = require("../models/product");
const multer  = require('multer')
//const upload = multer({ dest: './public/uploads/' })


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
    
    console.log(req.file);


   const user = new Product({
       productTittle : req.body.name,
       price: req.body.price
    });
    const data = await user.save();
    res.send(data);
});


router.get("/", async(req, res)=>{
    let data = await Product.find();
    res.send(data);
});
module.exports = router;