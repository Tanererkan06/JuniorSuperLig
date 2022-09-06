const db = require("../models");
//const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const PuanDurumu = db.PuanDurumus;
 

exports.create = (req, res) => { 
  console.log(req.headers);
 /*  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } */

  const puanDurumu = new PuanDurumu({
    sezon:req.body.sezon,
    sehir: req.body.sehir,
    lig:req.body.lig,
    ligadi:req.body.ligadi,
    takimid:req.body.takimid,
    takimadi:req.body.takimadi,
    oynananoyun:req.body.oynananoyun,
    galibiyet:req.body.galibiyet,
    malubiyet:req.body.malubiyet,
    beraberlik:req.body.beraberlik,
    attigigol:req.body.attigigol,
    yedigigol:req.body.yedigigol,
    avaraj:req.body.avaraj,
    puan:req.body.puan,
    published: req.body.published ? req.body.published : false,
    
  });  

  puanDurumu.save(puanDurumu)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the PuanDurumu."
      });
    });
};

exports.findAll = (req, res) => {
  const ligadi = req.query.ligadi;
   var condition = ligadi ? { ligadi: { $regex: new RegExp(ligadi), $options: "i" } } : {};

  PuanDurumu.find(condition)
    .then(data => {
      let x = data.sort(function(a, b) {
        return parseFloat(b.puan) - parseFloat(a.puan);
      });
       res.send(x);
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

  PuanDurumu.findById(id)
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

  PuanDurumu.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update PuanDurumu with id=${id}. Maybe PuanDurumu was not found!`
        });
      } else res.send({ message: "PuanDurumu was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating PuanDurumu with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  PuanDurumu.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete PuanDurumu with id=${id}. Maybe PuanDurumu was not found!`
        });
      } else {
        res.send({
          message: "PuanDurumu was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete PuanDurumu with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    PuanDurumu.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} PuanDurumus were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all PuanDurumus."
      });
    });
};

exports.findAllPublished = (req, res) => {
    PuanDurumu.find({ published: true })
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