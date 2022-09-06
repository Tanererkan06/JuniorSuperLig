module.exports = app => { 

    const PuanDurumu = require("../controllers/PuanDurumu.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  PuanDurumu.create);
  
     router.get("/", PuanDurumu.findAll);
  
     router.get("/published", PuanDurumu.findAllPublished);
  
     router.get("/:id", PuanDurumu.findOne);
  
     router.put("/:id", PuanDurumu.update);
  
     router.delete("/:id", PuanDurumu.delete);
  
     router.delete("/", PuanDurumu.deleteAll);
  
    app.use("/PuanDurumu", router);
  };