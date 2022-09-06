module.exports = app => { 
 

    const SponsorUcretBirimi = require("../controllers/SponsorUcretBirimi.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  SponsorUcretBirimi.create);
  
     router.get("/", SponsorUcretBirimi.findAll);
  
     router.get("/published", SponsorUcretBirimi.findAllPublished);
  
     router.get("/:id", SponsorUcretBirimi.findOne);
  
     router.put("/:id", SponsorUcretBirimi.update);
  
     router.delete("/:id", SponsorUcretBirimi.delete);
  
     router.delete("/", SponsorUcretBirimi.deleteAll);
  
    app.use("/SponsorUcretBirimi", router);
  };