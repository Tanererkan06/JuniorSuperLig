module.exports = app => { 

    const SponsorSuresi = require("../controllers/SponsorSuresi.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  SponsorSuresi.create);
  
     router.get("/", SponsorSuresi.findAll);
  
     router.get("/published", SponsorSuresi.findAllPublished);
  
     router.get("/:id", SponsorSuresi.findOne);
  
     router.put("/:id", SponsorSuresi.update);
  
     router.delete("/:id", SponsorSuresi.delete);
  
     router.delete("/", SponsorSuresi.deleteAll);
  
    app.use("/SponsorSuresi", router);
  };