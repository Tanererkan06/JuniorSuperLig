module.exports = app => { 

    const Sponsor = require("../controllers/Sponsor.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  Sponsor.create);
  
     router.get("/", Sponsor.findAll);
  
     router.get("/published", Sponsor.findAllPublished);
  
     router.get("/:id", Sponsor.findOne);
  
     router.put("/:id", Sponsor.update);
  
     router.delete("/:id", Sponsor.delete);
  
     router.delete("/", Sponsor.deleteAll);
  
    app.use("/Sponsor", router);
  };