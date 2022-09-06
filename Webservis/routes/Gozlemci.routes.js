module.exports = app => { 

    const Gozlemci = require("../controllers/Gozlemci.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  Gozlemci.create);
  
     router.get("/", Gozlemci.findAll);
  
     router.get("/published", Gozlemci.findAllPublished);
  
     router.get("/:id", Gozlemci.findOne);
  
     router.put("/:id", Gozlemci.update);
  
     router.delete("/:id", Gozlemci.delete);
  
     router.delete("/", Gozlemci.deleteAll);
  
    app.use("/Gozlemci", router);
  };