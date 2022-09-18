const db = require("../models");
//const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const Fikstur = db.Fiksturs;
 

exports.create = (req, res) => { 
  console.log(req.headers);
 /*  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } */

  let fikstur = new Fikstur({
    sehir: req.body.sehir,
    ligid: req.body.ligId,
    takimlar: req.body.takimlar,
    baslangictarihi: req.body.baslangicTarihi,
    bitistarihi: req.body.bitisTarihi,
    eslesmeturu: req.body.eslesmeTuru,
    eslesmeler: req.body.eslesmeler,
    published: req.body.published ? req.body.published : false,
  });  

  fikstur.save(fikstur)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Fikstur."
      });
    });
};

exports.findAll = (req, res) => {
  const ligid = req.query.ligid;
   var condition = ligid ? { ligid: { $regex: new RegExp(ligid), $options: "i" } } : {};

  Fikstur.find(condition)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Fiksturs."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Fikstur.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Fikstur with id " + id });
      else   res.send(data);
      console.log(data)
      console.log(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Fikstur with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Fikstur.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Fikstur with id=${id}. Maybe Fikstur was not found!`
        });
      } else res.send({ message: "Fikstur was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Fikstur with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Fikstur.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Fikstur with id=${id}. Maybe Fikstur was not found!`
        });
      } else {
        res.send({
          message: "Fikstur was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Fikstur with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Fikstur.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Fiksturs were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Fiksturs."
      });
    });
};

exports.findAllPublished = (req, res) => {
    Fikstur.find({ published: true })
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Fiksturs."
      });
    });
};