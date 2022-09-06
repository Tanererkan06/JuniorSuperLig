module.exports = app => { 

    const Veli = require("../controllers/Veli.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  Veli.create);
  
     router.get("/", Veli.findAll);
     router.post("/gercekkisimi", Veli.gercekkisi);
  
     router.get("/published", Veli.findAllPublished);
  
     router.get("/:id", Veli.findOne);
  
     router.put("/:id", Veli.update);
  
     router.delete("/:id", Veli.delete);
  
     router.delete("/", Veli.deleteAll);
  
    app.use("/Veli", router);
  };