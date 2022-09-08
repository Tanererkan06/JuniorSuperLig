module.exports = app => {
    const News = require("../controllers/News.controller.js");

    
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

     router.post("/", /* upload.single('file'), */  News.create);
  
     router.get("/", News.findAll);
  
     router.get("/published", News.findAllPublished);
  
     router.get("/:id", News.findOne);
  
     router.put("/:id", News.update);
  
     router.delete("/:id", News.delete);
  
     router.delete("/", News.deleteAll);
     
     router.post("/timeline/all", News.timeline);
      
    app.use("/News", router);
  };