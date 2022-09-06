module.exports = app => { 

    const SponsorSureTuru = require("../controllers/SponsorSureTuru.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  SponsorSureTuru.create);
  
     router.get("/", SponsorSureTuru.findAll);
  
     router.get("/published", SponsorSureTuru.findAllPublished);
  
     router.get("/:id", SponsorSureTuru.findOne);
  
     router.put("/:id", SponsorSureTuru.update);
  
     router.delete("/:id", SponsorSureTuru.delete);
  
     router.delete("/", SponsorSureTuru.deleteAll);
  
    app.use("/SponsorSureTuru", router);
  };