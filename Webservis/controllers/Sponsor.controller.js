const db = require("../models");
//const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const Sponsor = db.Sponsors;
 

exports.create = (req, res) => { 
  console.log(req.headers);
 /*  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } */

  let sponsor = new Sponsor({
    sponsoradi:req.body.sponsorAdi,
    sehir: req.body.sehir,
    sponsorekleyenid: req.body.sponsorEkleyenId,
    sponsorkategori:req.body.sponsorKategori,
    sponsorreklami:req.body.sponsorReklami,
    sponsorluksuresi:req.body.sponsorlukSuresi,
    sponsorluksureturu:req.body.sponsorlukSureTuru,
    sponsorlukucreti:req.body.sponsorlukUcreti,
    sponsorlukucretbirimi:req.body.sponsorlukUcretBirimi,
    eposta:req.body.eposta,
    sifre:req.body.sifre,
    published: req.body.published ? req.body.published : false,
  });  

  sponsor.save(sponsor)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Sponsor."
      });
    });
};

exports.findAll = (req, res) => {
  const sponsoradi = req.query.sponsoradi;
   var condition = sponsoradi ? { sponsoradi: { $regex: new RegExp(sponsoradi), $options: "i" } } : {};

  Sponsor.find(condition)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Sponsors."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Sponsor.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Sponsor with id " + id });
      else  res.send(data);
      console.log(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Sponsor with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Sponsor.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Sponsor with id=${id}. Maybe Sponsor was not found!`
        });
      } else res.send({ message: "Sponsor was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Sponsor with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Sponsor.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Sponsor with id=${id}. Maybe Sponsor was not found!`
        });
      } else {
        res.send({
          message: "Sponsor was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Sponsor with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Sponsor.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Sponsors were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Sponsors."
      });
    });
};

exports.findAllPublished = (req, res) => {
    Sponsor.find({ published: true })
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Sponsors."
      });
    });
};