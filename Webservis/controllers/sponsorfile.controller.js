 
  
const dbConfig = require("../config/db.config");
const db = require("../models");

const uploadFile = require("../middleware/sponsorupload");
const fs = require("fs");
 const baseUrl =  "http://localhost:8000/resources/static/assets/Sponsorresim/";
 
 
const path = require("path");
 
const upload = async (req, res) => {
 

  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    res.status(200).send({
      message: "Uploaded the file successfully: " ,
    });
  } catch (err) {
    console.log(err);

    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 2MB!",
      });
    }

    res.status(500).send({
      message: `Could not upload the file:  . ${err}`,
    });
  }
};

const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/public/resources/static/assets/Sponsorresim/";
  let JsonObject;
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
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
  const directoryPath = __basedir + "/public/resources/static/assets/Sponsorresim/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};





module.exports = {
  upload,
  getListFiles,
  download,
};
