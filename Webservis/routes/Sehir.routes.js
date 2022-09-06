module.exports = app => { 

    const Sehir = require("../controllers/Sehir.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  Sehir.create);
  
     router.get("/", Sehir.findAll);
  
     router.get("/published", Sehir.findAllPublished);
  
     router.get("/:id", Sehir.findOne);
  
     router.put("/:id", Sehir.update);
  
     router.delete("/:id", Sehir.delete);
  
     router.delete("/", Sehir.deleteAll);
  
    app.use("/Sehir", router);
  };