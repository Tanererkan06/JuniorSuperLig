 const mongoose = require("mongoose");

const Sponsor = mongoose.model(
  "Sponsor",
  new mongoose.Schema({
    //username: String,
   // email: String,
   // password: String,
    
  })
);

module.exports = Sponsor;

