module.exports = app => { 

    const OyuncuKonum = require("../controllers/OyunKonum.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  OyuncuKonum.create);
  
     router.get("/", OyuncuKonum.findAll);
  
     router.get("/published", OyuncuKonum.findAllPublished);
  
     router.get("/:id", OyuncuKonum.findOne);
  
     router.put("/:id", OyuncuKonum.update);
  
     router.delete("/:id", OyuncuKonum.delete);
  
     router.delete("/", OyuncuKonum.deleteAll);
  
    app.use("/OyuncuKonum", router);
  };