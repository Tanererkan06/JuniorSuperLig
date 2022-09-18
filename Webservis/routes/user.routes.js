const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const News = require("../controllers/News.controller.js");
//const Takim = require("../controllers/Takim.controller.js");
const User = require("../controllers/user.js");
const Users = require("../models/user.model.js");
const Takims = require("../models/Takim.model.js");
const axios = require('axios');
const otpGenerator = require('otp-generator')
const moment = require('moment');
require('dotenv').config()

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);
  app.get("/api/test/allusers", User.findAll);
  app.get("/api/test/tumgozculer", User.gozculistesi);
  app.get("/api/test/tumveliler", User.velilistesi);
  app.get("/api/test/:id", User.findOne);

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.post("/user/vertify", (req, res) => {
    let telno = req.body.telno

 if (telno !== "") {
      const otppwd = otpGenerator.generate(6, { digits: true, upperCaseAlphabets: false, specialChars: false });
    
      const tarih = moment().format().slice(0,10) + " " + moment().format().slice(11,19)

       axios.post('http://sms.verimor.com.tr/v2/send.json', {
        username: '908502422501',
        password: 'JUNIORSUPERLIG2023',
        source_addr: 'JR SUPERLIG',
        valid_for: '00:03',
        // send_at: tarih,
        custom_id: '123456789',
        datacoding: '1',
        messages: [{ msg: otppwd, dest: telno }]
      })
        .then(function (response) {
          console.log(response);
        })  

       console.log(tarih)
       res.status(200).send(otppwd);
       console.log(otppwd); 
    }
  });




  app.put("/:id/follow", async (req, res) => {
    if (req.body.takimId !== req.params.id) {
      try {
        const user = await Users.findById(req.params.id);
        const currentUser = await Takims.findById(req.body.takimId);
        if (!user.followers.includes(req.body.takimId)) {
          await user.updateOne({ $push: { followings: req.body.takimId } });
          await currentUser.updateOne({ $push: { followers: req.params.id } });
          res.status(200).json("user has been followed");
        } else {
          res.status(403).json("you allready follow this user");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("you cant follow yourself");
    }
  });

  //unfollow a user

  app.put("/:id/unfollow", async (req, res) => {
    if (req.body.takimId !== req.params.id) {
      try {
        const user = await Users.findById(req.params.id);
        const currentUser = await Takims.findById(req.body.takimId);
        if (user.followings.includes(req.body.takimId)) {
          await user.updateOne({ $pull: { followings: req.body.takimId } });
          await currentUser.updateOne({ $pull: { followers: req.params.id } });
          res.status(200).json("user has been unfollowed");
        } else {
          res.status(403).json("you dont follow this user");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("you cant unfollow yourself");
    }
  });

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );
};


