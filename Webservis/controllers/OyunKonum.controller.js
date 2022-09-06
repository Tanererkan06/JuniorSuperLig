const db = require("../models");
//const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const OyunKonum = db.OyunKonums;
 

exports.create = (req, res) => { 
  console.log(req.headers);
 /*  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } */

  let oyunKonum = new OyunKonum({
  
    konum:req.body.konum,
    il:req.body.il,
    sorumlu:req.body.sorumlu,
    sorumluiletisim:req.body.sorumluIletisim,
    adi:req.body.adi,
    takimid:req.body.takimId,
    takimadi:req.body.takimAdi,
    published: req.body.published ? req.body.published : false,

  });  

  oyunKonum.save(oyunKonum)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the OyunKonum."
      });
    });
};

exports.findAll = (req, res) => {
  const adi = req.query.adi;
   var condition = adi ? { adi: { $regex: new RegExp(adi), $options: "i" } } : {};

  OyunKonum.find(condition)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving OyunKonums."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  OyunKonum.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found OyunKonum with id " + id });
      else  res.send(data);
      console.log(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving OyunKonum with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  OyunKonum.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update OyunKonum with id=${id}. Maybe OyunKonum was not found!`
        });
      } else res.send({ message: "OyunKonum was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating OyunKonum with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  OyunKonum.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete OyunKonum with id=${id}. Maybe OyunKonum was not found!`
        });
      } else {
        res.send({
          message: "OyunKonum was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete OyunKonum with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    OyunKonum.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} OyunKonums were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all OyunKonums."
      });
    });
};

exports.findAllPublished = (req, res) => {
    OyunKonum.find({ published: true })
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving OyunKonums."
      });
    });
};