module.exports = app => { 

    const BannerReklam = require("../controllers/BannerReklam.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  BannerReklam.create);
  
     router.get("/", BannerReklam.findAll);
  
     router.get("/published", BannerReklam.findAllPublished);
  
     router.get("/:id", BannerReklam.findOne);
  
     router.put("/:id", BannerReklam.update);
  
     router.delete("/:id", BannerReklam.delete);
  
     router.delete("/", BannerReklam.deleteAll);
  
    app.use("/BannerReklam", router);
  };