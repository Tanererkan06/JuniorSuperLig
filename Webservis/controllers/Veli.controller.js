const db = require("../models");
//const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');
const soap = require('soap');
const ADRES = 'https://tckimlik.nvi.gov.tr/service/kpspublic.asmx?WSDL';

var mime = require('mime');
const Veli = db.Velis;
 

exports.create = (req, res) => { 
  console.log(req.headers);
 /*  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } */

  let veli = new Veli({
    uyruk:req.body.uyruk,
    oyuncuid:req.body.oyuncuId,
    oyuncuadi:req.body.oyuncuAdi,
    adi:req.body.adi,
    soyadi:req.body.soyadi,
    telefon:req.body.telefon,
    eposta:req.body.eposta,
    sifre:req.body.sifre,
    adres:req.body.adres,
    resim:req.body.resim,
    published: req.body.published ? req.body.published : false,
  });  

  veli.save(veli)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Veli."
      });
    });
};

exports.findAll = (req, res) => {
  const oyuncuadi = req.query.adi;
   var condition = oyuncuadi ? { adi: { $regex: new RegExp(oyuncuadi), $options: "i" } } : {};

  Veli.find(condition)
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Velis."
      });
    });
};

/* let degerler = {
  TCKimlikNo: 36673024326,
  Ad: 'Taner',
  Soyad: 'ERKAN',
  DogumYili: 1988
};

soap.createClient(ADRES, (err, client) => {
  client.TCKimlikNoDogrula(degerler, (err, result) => {
    if (result.TCKimlikNoDogrulaResult) {
      console.log('Bilgiler doğru'+JSON.stringify(result));
    } else {
      console.log('Bilgiler hatalı');
    }
  });
}); */

exports.gercekkisi = (req, res) => {

  let degerler = {
    TCKimlikNo: req.body.TCKimlikNo,
    Ad: req.body.Ad,
    Soyad: req.body.Soyad,
    DogumYili: req.body.DogumYili
  };

  soap.createClient(ADRES, (err, client) => {
    client.TCKimlikNoDogrula(degerler, (err, result) => {
      if (result.TCKimlikNoDogrulaResult) {
       
        res.send(result);
      } else {
        res.send(result);
       
      }
    });
   
  });  
};

 
exports.findOne = (req, res) => {
  const id = req.params.id;

  Veli.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Veli with id " + id });
      else  res.send(data);
      console.log(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Veli with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Veli.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Veli with id=${id}. Maybe Veli was not found!`
        });
      } else res.send({ message: "Veli was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Veli with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Veli.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Veli with id=${id}. Maybe Veli was not found!`
        });
      } else {
        res.send({
          message: "Veli was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Veli with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Veli.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Velis were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Velis."
      });
    });
};

exports.findAllPublished = (req, res) => {
    Veli.find({ published: true })
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Velis."
      });
    });
};