const db = require("../models");
//const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const Takim = db.Takims;

exports.create = (req, res) => { 
      const takim = new Takim({
      adi:req.body.adi,
      kurulustarihi:req.body.kurulusTarihi,
      oyunkonum:req.body.oyunKonum,
      fax:req.body.fax,
      website:req.body.website,
      oyuncular:req.body.oyuncular,
      hocaid:req.body.hocaId,
      hocaadi:req.body.hocaAdi,
      logo:req.body.logo,
      konum:req.body.konum,
      sorumlu:req.body.sorumlu,
      sorumluiletisim:req.body.sorumluIletisim,
      telefon:req.body.telefon,
      veli: req.body.veli,
      eposta:req.body.eposta,
      sifre:req.body.sifre,
      adres:req.body.adres,
      favori:req.body.favori,
      lig:req.body.lig,
      sehir: req.body.sehir,
      published: req.body.published ? req.body.published : false,
    });   
  
    takim
    .save(takim)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Takim."
        });
      }); 
  };

exports.findAll = (req, res) => {
  const adi = req.query.adi;
   var condition = adi ? { adi: { $regex: new RegExp(adi), $options: "i" } } : {};

  Takim.find()
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Takims."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Takim.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Takim with id " + id });
      else  res.send(data);
      console.log(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Takim with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Takim.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Takim with id=${id}. Maybe Takim was not found!`
        });
      } else res.send({ message: "Takim was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Takim with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Takim.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Takim with id=${id}. Maybe Takim was not found!`
        });
      } else {
        res.send({
          message: "Takim was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Takim with id=" + id
      });
    });
};

exports.tekGuncelle = async (req, res) => {
  const user = await Takim.findById(req.params.id);
  await user.updateOne({ $push: { veli: req.body.data }});
}

exports.tekGuncelle2 = async (req, res) => {
  const user = await Takim.findById(req.params.id);
  await user.updateOne({ $push: { oyuncular: req.body.data }});
}

exports.deleteAll = (req, res) => {
    Takim.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Takims were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Takims."
      });
    });
};

exports.findAllPublished = (req, res) => {
    Takim.find({ published: true })
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Takims."
      });
    });
};

exports.followuser = async (req, res, next)=>{

  /* if (req.body.userId !== req.params.id) {
      try {
        const user = await Takim.findById(req.params.id);
        const currentUser = await Takim.findById(req.body.userId);
        if (!user.followers.includes(req.body.userId)) {
          await user.updateOne({ $push: { followers: req.body.userId } });
          await currentUser.updateOne({ $push: { followings: req.params.id } });
          res.status(200).json("Takim has been followed");
        } else {
          res.status(403).json("you allready follow this Takim");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("you cant follow yourself");
    } */
 
} 
exports.unfollowuser = async (req, res, next)=>{

/*   if (req.body.userId !== req.params.id) {
      try {
        const user = await Takim.findById(req.params.id);
        const currentUser = await Takim.findById(req.body.userId);
        if (user.followers.includes(req.body.userId)) {
          await user.updateOne({ $pull: { followers: req.body.userId } });
          await currentUser.updateOne({ $pull: { followings: req.params.id } });
          res.status(200).json("Takim has been unfollowed");
        } else {
          res.status(403).json("you dont follow this user");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("you cant unfollow yourself");
    } */
 
}