const db = require("../models");
//const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const Ligler = db.Liglers;
 

exports.create = (req, res) => { 
  /*    console.log(req.headers);
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }  */ 
     const ligler = new Ligler({
        // ligId:req.body.ligId,
        sehir: req.body.sehir,
        ligadi:req.body.ligAdi,
        // ulke:req.body.ulke,
        // ilce:req.bod.ilce,
        published: req.body.published ? req.body.published : false
    });   
  
    ligler
    .save(ligler)
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
  // const ligadi = req.query.ligadi;
  //  var condition = ligadi ? { ligadi: { $regex: new RegExp(ligadi), $options: "i" } } : {};

  Ligler.find()
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Liglers."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Ligler.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Ligler with id " + id });
      else  res.send(data);
      console.log(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Ligler with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Ligler.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Ligler with id=${id}. Maybe Ligler was not found!`
        });
      } else res.send({ message: "Ligler was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Ligler with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Ligler.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Ligler with id=${id}. Maybe Ligler was not found!`
        });
      } else {
        res.send({
          message: "Ligler was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Ligler with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Ligler.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Liglers were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Liglers."
      });
    });
};

exports.findAllPublished = (req, res) => {
    Ligler.find({ published: true })
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Liglers."
      });
    });
};