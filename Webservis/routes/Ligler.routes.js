module.exports = app => { 
 

    const Ligler = require("../controllers/Ligler.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  Ligler.create);
  
     router.get("/", Ligler.findAll);
  
     router.get("/published", Ligler.findAllPublished);
  
     router.get("/:id", Ligler.findOne);
  
     router.put("/:id", Ligler.update);
  
     router.delete("/:id", Ligler.delete);
  
     router.delete("/", Ligler.deleteAll);
  
    app.use("/Ligler", router);
  };