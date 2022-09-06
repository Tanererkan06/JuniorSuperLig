module.exports = app => { 

    const Oyun = require("../controllers/Oyun.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  Oyun.create);
  
     router.get("/", Oyun.findAll);
  
     router.get("/published", Oyun.findAllPublished);
  
     router.get("/:id", Oyun.findOne);
  
     router.put("/:id", Oyun.update);
  
     router.delete("/:id", Oyun.delete);
  
     router.delete("/", Oyun.deleteAll);
  
    app.use("/Oyun", router);
  };