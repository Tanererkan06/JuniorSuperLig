module.exports = app => {
    const News = require("../controllers/News.controller.js");
    const news2 = require('../models/News.model.js');
    const users2 = require('../models/user.model.js');
    const takims2 = require('../models/Takim.model.js');
    
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

     router.get("/timeline/all", async (req, res) => {
      try {
        const currentUser = await takims2.findById(req.body.takimId);
        const userPosts = await news2.find({ takimid: currentUser._id });
        const friendPosts = await Promise.all(
          currentUser.followings.map((friendId) => {
            return news2.find({ takimId: friendId });
          })
        );
        res.json(userPosts.concat(...friendPosts))
      } catch (err) {
        res.status(500).json(err);
      }
    });
      
  
    app.use("/News", router);
  };