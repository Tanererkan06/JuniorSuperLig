module.exports = app => { 

    const Hakem = require("../controllers/Hakem.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  Hakem.create);
  
     router.get("/", Hakem.findAll);
  
     router.get("/published", Hakem.findAllPublished);
  
     router.get("/:id", Hakem.findOne);
  
     router.put("/:id", Hakem.update);
  
     router.delete("/:id", Hakem.delete);
  
     router.delete("/", Hakem.deleteAll);
  
    app.use("/Hakem", router);
  };