module.exports = app => { 

    const FiksturTakim = require("../controllers/FiksturTakim.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  FiksturTakim.create);
     router.get("/", FiksturTakim.findAll);
     router.get("/published", FiksturTakim.findAllPublished);
     router.get("/:id", FiksturTakim.findOne);
  
     router.put("/:id", FiksturTakim.update);
  
     router.delete("/:id", FiksturTakim.delete);
  
     router.delete("/", FiksturTakim.deleteAll);
  
    app.use("/FiksturTakim", router);
  };