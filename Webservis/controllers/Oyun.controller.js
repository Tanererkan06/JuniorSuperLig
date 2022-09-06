const db = require("../models");
//const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const Oyun = db.Oyuns;


exports.create = (req, res) => {
  console.log(req.headers);
  /*  if (!req.body) {
     res.status(400).send({ message: "Content can not be empty!" });
     return;
   } */

  let oyun = new Oyun({
    adi: req.body.adi,
    mactarihi: req.body.macTarihi,
    macsaati: req.body.macSaati,
    il: req.body.il,
    yer: req.body.yer,
    takimbirid: req.body.takimBirId,
    takimbiradi: req.body.takimBirAdi,
    takimikiid: req.body.takimIkiId,
    takimikiadi: req.body.takimIkiAdi,
    gozlemciid: req.body.gozlemciId,
    gozlemciadi: req.body.gozlemciAdi,
    ortahakem: req.body.ortaHakem,
    yanhakembir: req.body.yanHakemBir,
    yanhakemiki: req.body.yanHakemIki,
    dorduncuhakem: req.body.dorduncuHakem,
    yorum: req.body.yorum,
    lig: req.body.lig,
    macsonu: req.body.macSonu,
    ilkyarisonucu: req.body.ilkYariSonucu,
    //  golatanid:req.body.golatanid,
    //  golatanadi:req.body.golatanadi,
    //  golsaati:req.body.golsaati,
    //  sarikartgosterilenid:req.body.sarikartgosterilenid,
    // kirmizikartgosterilenid:req.body.kirmizikartgosterilenid,
    // sarikartgosterilenadi:req.body.sarikartgosterilenadi,
    // kirmizikartgosterilenadi:req.body.kirmizikartgosterilenadi,
    //uzatmasuresi:req.body.uzatmasuresi,
    // oyuncudegisikligi:req.body.oyuncudegisikligi,
    published: req.body.published ? req.body.published : false

  });

  oyun.save(oyun)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Oyun."
      });
    });
    
};

exports.findAll = (req, res) => {
  const adi = req.query.adi;
   var condition = adi ? { adi: { $regex: new RegExp(adi), $options: "i" } } : {};

  Oyun.find(condition)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Oyuns."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Oyun.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Oyun with id " + id });
      else  res.send(data);
      console.log(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Oyun with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Oyun.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Oyun with id=${id}. Maybe Oyun was not found!`
        });
      } else res.send({ message: "Oyun was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Oyun with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Oyun.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Oyun with id=${id}. Maybe Oyun was not found!`
        });
      } else {
        res.send({
          message: "Oyun was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Oyun with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Oyun.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Oyuns were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Oyuns."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Oyun.find({ published: true })
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Oyuns."
      });
    });
};