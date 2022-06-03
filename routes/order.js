const express = require("express");
const Router = express.Router();
const Order = require("../models/order");

Router.post("/order", async (req, res) => {

    var {
     products,
     bill
    } = req.body;

    if (
        products == undefined ||
        bill == undefined ||
        products == null ||
        bill == null
      ) {
        res.status(400).json({
            message: "Incomplete credentials",
          });
      }else{


        const order = new Order({
            products: products,
            bill : bill,
          });
          await order.save((err) => {
            if (err) {
              return res.status(400).send(err);
            }
            res.status(200).json({
              message: `Order added`,
            });
          });


      }

      



})

module.exports = Router;