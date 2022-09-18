const db = require("../models");
//const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const Slider = db.Sliders;
 

exports.create = (req, res) => { 
  console.log(req.headers);
 /*  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } */

  const slider = new Slider({
    baslik: req.body.sehir, 
    resimbaslik: req.body.resimbaslik, 
    src:req.body.src,
    resimicerik:req.body.resimicerik,
    videobaslik:req.body.videobaslik,
    url:req.body.url,
    sehir: req.body.sehir,
    veritipi:req.body.veritipi,
    slidetipi:req.body.slidetipi,
    published: req.body.published ? req.body.published : false,
    
  });  

  slider.save(slider)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Sehir."
      });
    });
};

exports.findAll = (req, res) => {
  // const sehiradi = req.query.sehiradi;
  //var condition = ligadi ? { ligadi: { $regex: new RegExp(ligadi), $options: "i" } } : {};

  Slider.find()
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving PuanDurumus."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Slider.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found PuanDurumu with id " + id });
      else  res.send(data);
      console.log(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving PuanDurumu with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Slider.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Sehir with id=${id}. Maybe Sehir was not found!`
        });
      } else res.send({ message: "Sehir was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating PuanDurumu with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Slider.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Sehir with id=${id}. Maybe Sehir was not found!`
        });
      } else {
        res.send({
          message: "Sehir was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Sehir with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Slider.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Sehir were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Sehir."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Slider.find({ published: true })
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Sehir."
      });
    });
};