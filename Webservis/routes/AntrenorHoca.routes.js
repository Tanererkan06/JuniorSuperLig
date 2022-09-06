

module.exports = app => { 
  const avatarYukleme = require("../controllers/avatarYukleme");
 
  const AntrenorHoca = require("../controllers/AntrenorHoca.controller");
  
var multer = require('multer');

const uploadMiddleware = multer({ 
  limits: {
      fileSize: 1024 * 1024 * 20 // 20 MB
  },
  fileFilter: (req, file, cb) => {
      if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
          cb(null, true);
      } else {
          cb(null, false);
      }
  },
  storage: multer.diskStorage({
      filename: (req, file, cb) => {
          cb(null, file.originalname);
      },
      destination: (req, file, cb) => {
          cb(null, 'uploads/');
      }
  })
});

  var router = require("express").Router();

   router.post("/", /* upload.single('file'), */  AntrenorHoca.create);

   router.get("/", AntrenorHoca.findAll);

   router.get("/published", AntrenorHoca.findAllPublished);

   router.get("/:id", AntrenorHoca.findOne);

   router.put("/:id", AntrenorHoca.update);

   router.delete("/:id", AntrenorHoca.delete);

   router.delete("/", AntrenorHoca.deleteAll);

   router.post("/upload", uploadMiddleware.single('avatar'), avatarYukleme.upload);
  //  router.get("/files", avatarYukleme.getFile);
   router.get("/files/:name", avatarYukleme.getFile);

  app.use("/AntrenorHoca", router);
};