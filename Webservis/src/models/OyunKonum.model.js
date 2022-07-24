 const mongoose = require("mongoose");

const OyunKonum = mongoose.model(
  "OyunKonum",
  new mongoose.Schema({
    //username: String,
   // email: String,
   // password: String,
    
  })
);

module.exports = OyunKonum;

