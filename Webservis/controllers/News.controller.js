const db = require("../models");
////const upload = require("../middleware/bannerupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');
const news2 = require('../models/News.model.js');
const users2 = require('../models/user.model.js');
const takims2 = require('../models/Takim.model.js');

var mime = require('mime');
const News = db.Newss;
const User = require("../models/user.model");

  exports.create = (req, res) => { 
  console.log(req.headers);
 /*  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } */

  const news = new News({
    baslik:req.body.baslik,
    icerik:req.body.icerik,
    resim:req.body.resim,
    sehir: req.body.sehir,
    kisaicerik:req.body.kisaIcerik,
    tarih:req.body.tarih,
    ulke: req.body.ulke,
    sehir: req.body.sehir,
    lig: req.body.lig,
    takimid: req.body.takimId,
    published: req.body.published ? req.body.published : false,
    
  });  

  news.save(news)
    .then(data => {
       res.send(data);
       console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the News."
      });
    });
};

  exports.findAll = (req, res) => {
  const baslik = req.query.baslik;
  //var condition = baslik ? { baslik: { $regex: new RegExp(baslik), $options: "i" } } : {};

  // News.find(condition)
  News.find()
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Newss."
      });
    });
};

  exports.findOne = (req, res) => {
  const id = req.params.id;

  News.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found News with id " + id });
      else  
      res.send(data);
      console.log(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving News with id=" + id });
    });
};

  exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  News.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update News with id=${id}. Maybe News was not found!`
        });
      } else res.send({ message: "News was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating News with id=" + id
      });
    });
};

  exports.delete = (req, res) => {
  const id = req.params.id;

  News.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete News with id=${id}. Maybe News was not found!`
        });
      } else {
        res.send({
          message: "News was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete News with id=" + id
      });
    });
};

  exports.deleteAll = (req, res) => {
    News.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} News were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Newss."
      });
    });
};

  exports.findAllPublished = (req, res) => {
    News.find({ published: true })
    .then(data => {
       res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Newss."
      });
    });
};

  exports.timeline = async (req, res) => {
  try {
    const currentUser = await takims2.findById(req.body.takimId);
    const userPosts = await news2.find({ takimid: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return news2.find({ takimId: friendId });
      })
    );
    res.json(userPosts.concat(...friendPosts))
  } catch (err) {
    res.status(500).json(err);
  }
};


 

