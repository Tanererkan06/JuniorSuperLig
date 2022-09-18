const db = require("../models");
//const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const Hakem = db.Hakems;
 

exports.create = (req, res) => { 
  /*    console.log(req.headers);
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }  */ 
   
     const hakem = new Hakem({
      adi:req.body.adi,
      soyadi:req.body.soyadi,
      telefon:req.body.telefon,
      eposta:req.body.eposta,
      sifre:req.body.sifre,
      adres:req.body.adres,
      sehir: req.body.sehir,
      resim:req.body.resim,
      dogumtarihi:req.body.dogumTarihi,
      gosterdigisarikart:req.body.gosterdigiSariKart,
      gosterdigikirmizikart:req.body.gosterdigiKirmiziKart,
      oyunsayisi:req.body.oyunSayisi,
      gorevliolduguoyun:req.body.gorevliOlduguOyun,
      published: req.body.published ? req.body.published : false,
    });   
  
    hakem
    .save(hakem)
      .then(data => {
        res.send(data);
         console.log(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Hakem."
        });
      }); 
  };

exports.findAll = (req, res) => {
  const adi = req.query.adi;
   var condition = adi ? { adi: { $regex: new RegExp(adi), $options: "i" } } : {};

  Hakem.find(condition)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Hakems."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Hakem.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Hakem with id " + id });
      else  res.send(data);
      console.log(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Hakem with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Hakem.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Hakem with id=${id}. Maybe Hakem was not found!`
        });
      } else res.send({ message: "Hakem was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Hakem with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Hakem.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Hakem with id=${id}. Maybe Hakem was not found!`
        });
      } else {
        res.send({
          message: "Hakem was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Hakem with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Hakem.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Hakems were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Hakems."
      });
    });
};

exports.findAllPublished = (req, res) => {
    Hakem.find({ published: true })
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Hakems."
      });
    });
};