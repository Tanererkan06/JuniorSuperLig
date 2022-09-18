const db = require("../models");
//const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const OyuncuKarti = db.OyuncuKartis;
 

exports.create = (req, res) => { 
  console.log(req.headers);
 /*  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } */

  let oyuncuKarti = new OyuncuKarti({

      kimlikno:req.body.kimlikNo,
      adi:req.body.adi,
      soyadi:req.body.soyadi,
      dogumyeri:req.body.dogumYeri,
      Dogumtarihi:req.body.dogumTarihi,
      boy:req.body.boy,
      kilo:req.body.kilo,
      pozisyon:req.body.pozisyon,
      takimid:req.body.takimId,
      takimadi:req.body.takimAdi,
      lig:req.body.lig,
      formano:req.body.formaNo,
      oynadigimacsayisi:req.body.oynadigiMacSayisi,
      atilangolsayisi:req.body.atilanGolSayisi,
      asist:req.body.asist,
      resim:req.body.resim,
      oncekitakimi:req.body.oncekiTakimi,
      sarikart:req.body.sariKart,
      kirmizikart:req.body.kirmiziKart,
      hocaid:req.body.hocaId,
      hocaadi:req.body.hocaAdi,
      veli:req.body.veli,
      sehir: req.body.sehir,
      telefon:req.body.telefon,
      adres:req.body.adres,
      eposta:req.body.eposta,
      sifre:req.body.sifre,
      uyruk:req.body.uyruk,
      published: req.body.published ? req.body.published : false,
  });  

  oyuncuKarti.save(oyuncuKarti)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the OyuncuKarti."
      });
    });
};

exports.findAll = (req, res) => {
  const adi = req.query.adi;
   var condition = adi ? { adi: { $regex: new RegExp(adi), $options: "i" } } : {};

  OyuncuKarti.find(condition)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving OyuncuKartis."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  OyuncuKarti.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found OyuncuKarti with id " + id });
      else  res.send(data);
      console.log(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving OyuncuKarti with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  OyuncuKarti.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update OyuncuKarti with id=${id}. Maybe OyuncuKarti was not found!`
        });
      } else res.send({ message: "OyuncuKarti was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating OyuncuKarti with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  OyuncuKarti.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete OyuncuKarti with id=${id}. Maybe OyuncuKarti was not found!`
        });
      } else {
        res.send({
          message: "OyuncuKarti was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete OyuncuKarti with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    OyuncuKarti.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} OyuncuKartis were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all OyuncuKartis."
      });
    });
};

exports.findAllPublished = (req, res) => {
    OyuncuKarti.find({ published: true })
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving OyuncuKartis."
      });
    });
};