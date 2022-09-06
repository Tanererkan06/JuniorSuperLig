module.exports = app => { 

    const SponsorKategori = require("../controllers/SponsorKategori.controller.js");
    
  var multer = require('multer');

  var storage = multer.diskStorage({
    destination: (req, file, cb) => {

      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
      cb(null, file.fieldname + '-' + Date.now() + ext)
    }
  });
  
    var router = require("express").Router();
    var upload = multer({ storage: storage }); 

     router.post("/", /* upload.single('file'), */  SponsorKategori.create);
  
     router.get("/", SponsorKategori.findAll);
  
     router.get("/published", SponsorKategori.findAllPublished);
  
     router.get("/:id", SponsorKategori.findOne);
  
     router.put("/:id", SponsorKategori.update);
  
     router.delete("/:id", SponsorKategori.delete);
  
     router.delete("/", SponsorKategori.deleteAll);
  
    app.use("/SponsorKategori", router);
  };