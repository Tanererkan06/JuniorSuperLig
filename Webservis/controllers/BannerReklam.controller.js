const db = require("../models");
//const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const BannerReklam = db.BannerReklams;
 

exports.create = (req, res) => { 
  console.log(req.headers);
 /*  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } */

  const bannerReklam = new BannerReklam({
    sehir: req.body.sehir,
    reklamveren:req.body.reklamveren,
    resim:req.body.resim,
    tarih:req.body.tarih,
    url:req.body.url,
    published: req.body.published ? req.body.published : false,
    
  });  

  bannerReklam.save(bannerReklam)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the News."
      });
    });
};

exports.findAll = (req, res) => {
  const reklamveren = req.query.reklamveren;
  //var condition = baslik ? { baslik: { $regex: new RegExp(baslik), $options: "i" } } : {};

  BannerReklam.find()
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Newss."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  BannerReklam.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found News with id " + id });
      else  res.send(data);
      console.log(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving News with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  BannerReklam.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update News with id=${id}. Maybe News was not found!`
        });
      } else res.send({ message: "News was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating News with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  BannerReklam.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete News with id=${id}. Maybe News was not found!`
        });
      } else {
        res.send({
          message: "News was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete News with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    BannerReklam.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} News were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Newss."
      });
    });
};

exports.findAllPublished = (req, res) => {
    BannerReklam.find({ published: true })
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Newss."
      });
    });
};