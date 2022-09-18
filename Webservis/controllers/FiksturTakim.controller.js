const db = require("../models");
//const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const FiksturTakim = db.FiksturTakims;
 

exports.create = (req, res) => { 
  console.log(req.headers);
 /*  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } */

  let fiksturTakim = new FiksturTakim({
    ligid:req.body.ligid,
    takimid:req.body.takimid,
    sehir: req.body.sehir,
    IsDeleted:req.body.IsDeleted,
    published: req.body.published ? req.body.published : false,
  });  

  fiksturTakim.save(fiksturTakim)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Fikstur Takim."
      });
    });
};

exports.findAll = (req, res) => {
  const ligid = req.query.ligid;
   var condition = ligid ? { ligid: { $regex: new RegExp(ligid), $options: "i" } } : {};

   FiksturTakim.find(condition)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving FiksturTakims."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  FiksturTakim.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Fikstur Takim with id " + id });
      else   res.send(data);
      console.log(data)
      console.log(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Fikstur Takim with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  FiksturTakim.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Fikstur Takim with id=${id}. Maybe Fikstur Takim was not found!`
        });
      } else res.send({ message: "Fikstur Takim was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Fikstur Takim with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  FiksturTakim.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Fikstur Takim with id=${id}. Maybe Fikstur Takim was not found!`
        });
      } else {
        res.send({
          message: "Fikstur Takim was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Fikstur Takim with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  FiksturTakim.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Fikstur Takim were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Fikstur Takim."
      });
    });
};

exports.findAllPublished = (req, res) => {
  FiksturTakim.find({ published: true })
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Fikstur Takim."
      });
    });
};