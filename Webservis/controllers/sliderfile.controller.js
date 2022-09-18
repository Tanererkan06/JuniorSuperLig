 
  
const dbConfig = require("../config/db.config");
const db = require("../models");

const uploadFile = require("../middleware/sliderupload");
const fs = require("fs");
 const baseUrl =  "http://localhost:8000/resources/static/assets/slider/";
 
const path = require("path");
 
const upload = async (req, res) => {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Lütfen bir dosya yükleyin!" });
    }

    res.status(200).send({
      message: "Dosya başarıyla yüklendi!" ,
    });
  } catch (err) {
    console.log(err);

    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "Dosyanın boyutu 2MB'dan fazla olamaz!",
      });
    }

    res.status(500).send({
      message: `Dosya yüklenemedi: ${err}`,
    });
  }
};

const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/public/resources/static/assets/slider/";
  let JsonObject;
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Dosya taranamıyor!",
      });
    }


    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
        type: path.extname(baseUrl + file),
      });
    });

    JsonObject = JSON.parse(JSON.stringify(fileInfos));
//console.log(JsonObject)
    res.status(200).send(JSON.stringify(JsonObject));
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/public/resources/static/assets/slider/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Dosya indirilemedi: " + err,
      });
    }
  });
};





module.exports = {
  upload,
  getListFiles,
  download,
};
