module.exports = app => { 

    const OyunLive = require("../controllers/OyunLive.controller.js");
    
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

    //socket.on ekle

     router.post("/", /* upload.single('file'), */  OyunLive.create);

  
     router.get("/", OyunLive.findAll);
  
     router.get("/published", OyunLive.findAllPublished);
  
     router.get("/:id", OyunLive.findOne);
  
     router.put("/:id", OyunLive.update);
  
     router.delete("/:id", OyunLive.delete);
  
     router.delete("/", OyunLive.deleteAll);
  
    app.use("/OyunLive", router);
  };