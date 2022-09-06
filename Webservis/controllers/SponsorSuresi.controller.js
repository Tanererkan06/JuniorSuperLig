const db = require("../models");
//const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const SponsorSuresi = db.SponsorSuresis;
 

exports.create = (req, res) => { 
  console.log(req.headers);
 /*  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } */

  let sponsorSuresi = new SponsorSuresi({
    adi:req.body.adi,
    published: req.body.published ? req.body.published : false,
   
  });  

  sponsorSuresi.save(sponsorSuresi)
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
  const adi = req.query.adi;
   var condition = adi ? { adi: { $regex: new RegExp(adi), $options: "i" } } : {};

  SponsorSuresi.find(condition)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving SponsorSuresis."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  SponsorSuresi.findById(id)
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

  SponsorSuresi.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

  SponsorSuresi.findByIdAndRemove(id, { useFindAndModify: false })
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
    SponsorSuresi.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} SponsorSuresis were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all SponsorSuresis."
      });
    });
};

exports.findAllPublished = (req, res) => {
    SponsorSuresi.find({ published: true })
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving SponsorSuresis."
      });
    });
};