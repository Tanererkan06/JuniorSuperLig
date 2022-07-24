 const mongoose = require("mongoose");

const OyuncuKarti = mongoose.model(
  "OyuncuKarti",
  new mongoose.Schema({
    //username: String,
   // email: String,
   // password: String,
    
  })
);

module.exports = OyuncuKarti;

