module.exports = app => { 
  
 

    const Takim = require("../controllers/Takim.controller.js");
    
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

     router.post("/", /* upload.single('file'), */  Takim.create);
  
     router.get("/", Takim.findAll);
  
     router.get("/published", Takim.findAllPublished);
  
     router.get("/:id", Takim.findOne);
  
     router.put("/:id", Takim.update);
  
     router.delete("/:id", Takim.delete);
  
     router.delete("/", Takim.deleteAll);

     router.put("/:id/follow", Takim.followuser);
     router.put("/:id/unfollow", Takim.unfollowuser);

     router.put("/:id/updateVeli", Takim.tekGuncelle);
     router.put("/:id/updateOyuncular", Takim.tekGuncelle2);

     /* router.put("/followuser/:id",isAuthenticated,Takim.followuser);
     router.put("/unfollowuser/:id",isAuthenticated,Takim.unfollowuser); */
  
    app.use("/Takim", router);
  };