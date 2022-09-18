const db = require("../models");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const AntrenorHoca = db.AntrenorHocas;
 

exports.create = (req, res) => { 
/*    console.log(req.headers);
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }  */ 
 
   const antrenorHoca = new AntrenorHoca({
      adi:req.body.adi,
      soyadi:req.body.soyadi,
      telefon:req.body.telefon,
      eposta:req.body.eposta,
      sifre:req.body.sifre,
      adres:req.body.adres,
      uyruk:req.body.uyruk,
      resim:req.body.resim,
      sehir: req.body.sehir,
      dogumyeri:req.body.dogumYeri,
      dogumtarihi:req.body.dogumtarihi,
      takimid:req.body.takimId,
      takimadi:req.body.takimAdi,
      published: req.body.published ? req.body.published : false

  });   

   antrenorHoca
  .save(antrenorHoca)
    .then(data => {
      res.send(data);
       console.log(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the AntrenorHoca."
      });
    }); 
};

exports.findAll = (req, res) => {
 // const adi = req.query.adi;
  // var condition = adi ? { adi: { $regex: new RegExp(adi), $options: "i" } } : {};

  AntrenorHoca.find()
    .then(data => {
      res.send(data);
      console.log(data)
     })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving AntrenorHocas."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  AntrenorHoca.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found AntrenorHoca with id " + id });
      else 
       res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving AntrenorHoca with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  AntrenorHoca.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update AntrenorHoca with id=${id}. Maybe AntrenorHoca was not found!`
        });
      } else res.send({ message: "AntrenorHoca was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating AntrenorHoca with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  AntrenorHoca.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete AntrenorHoca with id=${id}. Maybe AntrenorHoca was not found!`
        });
      } else {
        res.send({
          message: "AntrenorHoca was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete AntrenorHoca with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    AntrenorHoca.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} AntrenorHocas were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all AntrenorHocas."
      });
    });
};

exports.findAllPublished = (req, res) => {
    AntrenorHoca.find({ published: true })
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving AntrenorHocas."
      });
    });
};