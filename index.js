const express = require('express')
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const port = 3002
const products = require('./routes/products');
const order = require('./routes/order')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(products)
app.use(order)


app.listen(port, (error) => {
    if(error){
        console.log('Error: ' +error)
    }
    else{
        console.log("app is listing on port : "+port)

        mongoose.connect('mongodb://localhost:27017/', (dbError) => {
            if (dbError) {
              console.error("Error Occurred while connecting to database: ", dbError);
            } else {
              console.log("Connected to Database Successfully!");
            }
          });
    }
})