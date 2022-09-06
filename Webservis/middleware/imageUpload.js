// const multer = require('multer');
// const uploadMiddleware = multer({ 
//     limits: {
//         fileSize: 1024 * 1024 * 20 // 20 MB
//     },
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//             cb(null, true);
//         } else {
//             cb(null, false);
//         }
//     },
//     storage: multer.diskStorage({
//         filename: (req, file, cb) => {
//             cb(null, file.originalname);
//         },
//         destination: (req, file, cb) => {
//             cb(null, 'uploads/');
//         }
//     })
//  });

//  module.exports = uploadMiddleware;

const util = require("util");
const multer = require("multer");
const maxSize = 2 * 5024 * 5024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/uploads");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("avatar");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;