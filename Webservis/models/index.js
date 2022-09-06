const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.Sponsors = require("./Sponsor.model")(mongoose);
db.Liglers = require("./Ligler.model")(mongoose);
db.Fiksturs = require("./Fikstur.model")(mongoose);
db.Velis = require("./Veli.model")(mongoose);
// db.Takims = require("./Takim.model")(mongoose);
db.Takims = require("./Takim.model");
db.Oyuns = require("./Oyun.model")(mongoose);
db.OyunKonums = require("./OyunKonum.model")(mongoose);
db.OyuncuKartis = require("./OyuncuKarti.model")(mongoose);
db.Gozlemcis = require("./Gozlemci.model")(mongoose);
db.IlTemsilcisis = require("./IlTemsilcisi.model")(mongoose);
db.PuanDurumus = require("./PuanDurumu.model")(mongoose);
db.AntrenorHocas = require("./AntrenorHoca.model")(mongoose);
db.SponsorKategoris = require("./SponsorKategori.model")(mongoose);
db.SponsorUcretBirimis = require("./SponsorUcretBirimi.model")(mongoose);
db.SponsorSuresis = require("./SponsorSuresi.model")(mongoose);
db.Sehirs =require("./Sehir.model")(mongoose);
// db.Newss =require("./News.model")(mongoose);
db.Newss =require("./News.model");
db.OyunLives = require("./OyunLive.model")(mongoose);
db.Sliders = require("./Slider.model")(mongoose)
db.BannerReklams=require("./BannerReklam.model")(mongoose)
db.SponsorSureTurus=require("./SponsorSureTuru.model")(mongoose)
db.Contacts=require("./Contact.model")(mongoose)

 db.ROLES = ["user", "admin", "gozcu", "veli", "ilYoneticisi", "sponsor", "veliVeAntrenor", "antrenor"]; 


module.exports = db;