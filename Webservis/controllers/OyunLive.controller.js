const db = require("../models");
//const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const OyunLive = db.OyunLives;
 

exports.create = (req, res) => { 
  console.log(req.headers);
 /*  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } */

  let oyunLive = new OyunLive({

    adi:req.body.adi,
    mactarihi:req.body.mactarihi,
    macsaati:req.body.macsaati,
    sehir: req.body.sehir,
    lig: req.body.lig,
    yer:req.body.yer,
    takimbirid:req.body.takimbirid,
    takimbiradi:req.body.takimbiradi,
    takimikiid:req.body.takimikiid,
    takimikiadi:req.body.takimikiadi,
    gozlemciid:req.body.gozlemciid,
    gozlemciadi:req.body.gozlemciadi,
    ortahakem:req.body.ortahakem,
    yanhakembir:req.body.yanhakembir,
    yanhakemiki:req.body.yanhakemiki,
    dorduncuhakem:req.body.dorduncuhakem,
    yorum:req.body.yorum,
    golatanid:req.body.golatanid,
    golatanadi:req.body.golatanadi,
    golsaati:req.body.golsaati,
    sarikartgosterilenid:req.body.sarikartgosterilenid,
    kirmizikartgosterilenid:req.body.kirmizikartgosterilenid,
    sarikartgosterilenadi:req.body.sarikartgosterilenadi,
    kirmizikartgosterilenadi:req.body.kirmizikartgosterilenadi,
    uzatmasuresi:req.body.uzatmasuresi,
    Oyuncudegisikligi:req.body.Oyuncudegisikligi,
    macsonu:req.body.macsonu,
    lig:req.body.lig,
    ilkyarisonucu:req.body.ilkyarisonucu,
    published: req.body.published ? req.body.published : false

  });  

  OyunLive.save(oyunLive)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the OyunLive."
      });
    });
};

exports.findAll = (req, res) => {
  const adi = req.query.adi;
   var condition = adi ? { adi: { $regex: new RegExp(adi), $options: "i" } } : {};

  OyunLive.find(condition)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving OyunLives."
      });
    });
};

  exports.findOne = (req, res) => {
  const id = req.params.id;

  OyunLive.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found OyunLive with id " + id });
      else  res.send(data);
      console.log(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving OyunLive with id=" + id });
    });
};

  exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  OyunLive.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update OyunLive with id=${id}. Maybe OyunLive was not found!`
        });
      } else res.send({ message: "OyunLive was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating OyunLive with id=" + id
      });
    });
};

  exports.delete = (req, res) => {
  const id = req.params.id;

  OyunLive.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete OyunLive with id=${id}. Maybe OyunLive was not found!`
        });
      } else {
        res.send({
          message: "OyunLive was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete OyunLive with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    OyunLive.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} OyunLives were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all OyunLives."
      });
    });
};

exports.findAllPublished = (req, res) => {
    OyunLive.find({ published: true })
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving OyunLives."
      });
    });
};