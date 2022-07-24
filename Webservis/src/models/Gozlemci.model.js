 const mongoose = require("mongoose");

const Gozlemci = mongoose.model(
  "Gozlemci",
  new mongoose.Schema({
    //username: String,
   // email: String,
   // password: String,
    
  })
);

module.exports = Gozlemci;

