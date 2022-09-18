const db = require("../models");
//const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const Gozlemci = db.Gozlemcis;
 

// exports.create = (req, res) => { 
//   console.log(req.headers);
//  /*  if (!req.body) {
//     res.status(400).send({ message: "Content can not be empty!" });
//     return;
//   } */

//   let gozlemci = new Gozlemci({
//     oyunliveid:req.body.oyunLiveId,
//     adi: req.body.adi,
//     published: req.body.published ? req.body.published : false,
//   });  

//   Gozlemci.save(gozlemci)
//     .then(data => {
//       res.send(data);
//       console.log(data)
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Gozlemci."
//       });
//     });
// };

exports.create = (req, res) => {    
     const gozlemci = new Gozlemci({
      adi: req.body.adi,
      sehir: req.body.sehir,
      // oyunliveid:req.body.oyunLiveId,
      published: req.body.published ? req.body.published : false,
    });   
  
    gozlemci
    .save(gozlemci)
      .then(data => {
        res.send(data);
        //  console.log(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Gözlemci."
        });
      }); 
  };

exports.findAll = (req, res) => {
  const oyunliveid = req.query.oyunliveid;
//  var condition = oyunliveid ? { oyunliveid: { $regex: new RegExp(oyunliveid), $options: "i" } } : {};

  Gozlemci.find()
    .then(data => {
      res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Gozlemcis."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Gozlemci.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Gozlemci with id " + id });
      else  res.send(data);
      console.log(data)
      console.log(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Gozlemci with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Gozlemci.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Gozlemci with id=${id}. Maybe Gozlemci was not found!`
        });
      } else res.send({ message: "Gozlemci was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Gozlemci with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Gozlemci.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Gozlemci with id=${id}. Maybe Gozlemci was not found!`
        });
      } else {
        res.send({
          message: "Gozlemci was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Gozlemci with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Gozlemci.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Gozlemcis were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Gozlemcis."
      });
    });
};

exports.findAllPublished = (req, res) => {
    Gozlemci.find({ published: true })
    .then(data => {
      res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Gozlemcis."
      });
    });
};