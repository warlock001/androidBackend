const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/products", async (req, res) => {
    res.status(200).json({
        productName: "Briyani",
        productPrice:"220rs",
        image : 'briyani',
        description : 'vdvf'
      });


      var dest = await Destination.find()
});

router.post("/products", async (req, res) => {

  var {
    productName,
    productPrice,
    image,
    description
  } = req.body;

  if (
    productName == undefined ||
    productPrice == undefined ||
    image == null ||
    description  == null ||
    description == undefined
    ) {
      res.status(400).json({
          message: "Incomplete credentials",
        });
    }else{


      const product = new Product({
        productName: productName,
        productPrice : productPrice,
        image : image,
        description : description

        });
        await product.save((err) => {
          if (err) {
            return res.status(400).send(err);
          }
          res.status(200).json({
            message: `product added`,
          });
        });
    }
})



module.exports = router;