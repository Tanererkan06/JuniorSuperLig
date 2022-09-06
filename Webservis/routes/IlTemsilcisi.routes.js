module.exports = app => { 

    const IlTemsilcisi = require("../controllers/IlTemsilci.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  IlTemsilcisi.create);
  
     router.get("/", IlTemsilcisi.findAll);
  
     router.get("/published", IlTemsilcisi.findAllPublished);
  
     router.get("/:id", IlTemsilcisi.findOne);
  
     router.put("/:id", IlTemsilcisi.update);
  
     router.delete("/:id", IlTemsilcisi.delete);
  
     router.delete("/", IlTemsilcisi.deleteAll);
  
    app.use("/IlTemsilcisi", router);
  };