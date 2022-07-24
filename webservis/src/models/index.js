const dbConfig = require("../config/db.config.js");
const Sequelize = require('sequelize');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./user.model");
db.role = require("./role.model");
db.Sponsor = require("./Sponsor.model")
db.Ligler = require("./Ligler.model")
db.Fikstur = require("./Fikstur.model")
db.Ligler = require("./Ligler.model")
db.Veli = require("./Veli.model")
//db.Takim = require("./Takim.model")
//db.OyunLive = require("./OyunLive.model")
//db.OyunKonum = require("./OyunKonum.model")
//db.OyuncuKarti = require("./OyuncuKarti.model")
//db.Gozlemci = require("./Gozlemci.model")
//db.Hakem = require("./Hakem.model")
//db.ilTemsilcisi = require("./ilTemsilcisi.model")
//db.PuanDurumu
//
   

db.ROLES = ["user", "admin"]; // buralar arttırılacak 
module.exports = db;