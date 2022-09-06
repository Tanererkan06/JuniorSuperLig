module.exports = app => { 

    const Fikstur = require("../controllers/Fikstur.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  Fikstur.create);
     router.get("/", Fikstur.findAll);
     router.get("/published", Fikstur.findAllPublished);
     router.get("/:id", Fikstur.findOne);
  
     router.put("/:id", Fikstur.update);
  
     router.delete("/:id", Fikstur.delete);
  
     router.delete("/", Fikstur.deleteAll);
  
    app.use("/Fikstur", router);
  };