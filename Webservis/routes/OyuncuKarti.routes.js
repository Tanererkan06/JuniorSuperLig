module.exports = app => { 

    const OyuncuKarti = require("../controllers/OyuncuKarti.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  OyuncuKarti.create);
  
     router.get("/", OyuncuKarti.findAll);
  
     router.get("/published", OyuncuKarti.findAllPublished);
  
     router.get("/:id", OyuncuKarti.findOne);
  
     router.put("/:id", OyuncuKarti.update);
  
     router.delete("/:id", OyuncuKarti.delete);
  
     router.delete("/", OyuncuKarti.deleteAll);
  
    app.use("/OyuncuKarti", router);
  };