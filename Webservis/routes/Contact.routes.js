module.exports = app => { 

    const Contact = require("../controllers/Contact.controller");
    
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

     router.post("/", /* upload.single('file'), */  Contact.create);
  
     router.get("/", Contact.findAll);
  
     router.get("/published", Contact.findAllPublished);
  
     router.get("/:id", Contact.findOne);
  
     router.put("/:id", Contact.update);
  
     router.delete("/:id", Contact.delete);
  
     router.delete("/", Contact.deleteAll);
  
    app.use("/Contact", router);
  };