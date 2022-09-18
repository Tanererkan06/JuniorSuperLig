const db = require("../models");
//const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const IlTemsilci = db.IlTemsilcisis;
 
exports.create = (req, res) => { 
     const ilTemsilci = new IlTemsilci({
      adi:req.body.adi,
      sehir: req.body.sehir,
      published: req.body.published ? req.body.published : false,
    });   
  
    ilTemsilci
    .save(ilTemsilci)
      .then(data => {
        res.send(data);
         console.log(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Il Temsilcisi."
        });
      }); 
  };

exports.findAll = (req, res) => {
  // const adi = req.query.adi;
   // var condition = adi ? { adi: { $regex: new RegExp(adi), $options: "i" } } : {};
 
   IlTemsilci.find()
     .then(data => {
       res.send(data);
       console.log(data)
      })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving Il Temsilcisi."
       });
     });
 };

exports.findOne = (req, res) => {
  const id = req.params.id;

  IlTemsilci.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found IlTemsilci with id " + id });
      else  res.send(data);
      console.log(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving IlTemsilci with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  IlTemsilci.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update IlTemsilci with id=${id}. Maybe IlTemsilci was not found!`
        });
      } else res.send({ message: "IlTemsilci was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating IlTemsilci with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  IlTemsilci.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete IlTemsilci with id=${id}. Maybe IlTemsilci was not found!`
        });
      } else {
        res.send({
          message: "IlTemsilci was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete IlTemsilci with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    IlTemsilci.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} IlTemsilcis were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all IlTemsilcis."
      });
    });
};

exports.findAllPublished = (req, res) => {
    IlTemsilci.find({ published: true })
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving IlTemsilcis."
      });
    });
};