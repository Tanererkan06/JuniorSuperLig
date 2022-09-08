const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors");
const http = require('http');
const mongoose = require('mongoose');
//const cookieSession = require("cookie-session");
//const session = require('express-session');
 const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const morgan = require('morgan');
const db = require("./models");
const xXssProtection = require("x-xss-protection");
const helmet = require("helmet");
const hpp = require("xss-clean");
const rateLimit = require("express-rate-limit");
var xssFilters = require('xss-filters');
var csrf = require('csurf')
var csrfProtection = csrf({ cookie: true })
const mongodb = require('mongodb');

const path = require("path");
const server = http.createServer(app);
const { Server } = require("socket.io");
const Role = db.role;
 
global.__basedir = __dirname;


var corsOptions = {
  origin: "*"
};

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
 

app.use(cors(corsOptions));


app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the reques>
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

var expiryDate = new Date(Date.now() + 60 * 60 * 1000)
app.use(express.urlencoded({ extended: false }));


app.use(express.static('public'));


/*   app.use(
  cookieSession({
    name: "jpl-session",
    secret: "JuniorsuperligJWT",  should use as secret environment variable
    httpOnly: true
  })
);  */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet.hidePoweredBy());
app.use(hpp());
app.use(xXssProtection());
app.disable('x-powered-by');
 

db.mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
); 


// db.mongoose
//   .connect(
//     process.env.DATABASE,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     })
//   .then(() => {
//     console.log("Successfully connect to MongoDB.");
//    initial();
//   })
//   .catch(err => {
//     console.error("Connection error", err);
//     process.exit();
//   });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Junior SuperLig Api application." });
});


// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json({limit: '1000mb'}));
app.use(express.urlencoded({     
    limit: '100mb',
    extended: true
    }));
app.use(cookieParser());
app.use(cors());

 

require("./routes/AntrenorHoca.routes.js")(app);
require("./routes/Veli.routes.js")(app);
require("./routes/Bannerreklam.routes.js")(app);
require("./routes/Contact.routes.js")(app);
require("./routes/News.routes.js")(app);
require("./routes/Sehir.routes.js")(app);
require("./routes/Fikstur.routes.js")(app);
require("./routes/FiksturTakim.routes.js")(app);
require("./routes/Gozlemci.routes.js")(app);
require("./routes/Hakem.routes.js")(app);
require("./routes/IlTemsilcisi.routes.js")(app);
require("./routes/Ligler.routes.js")(app);
require("./routes/Oyun.routes.js")(app);
require("./routes/OyuncuKarti.routes.js")(app);
require("./routes/OyunKonum.routes.js")(app);
require("./routes/OyunLive.routes.js")(app);
require("./routes/PuanDurumu.routes.js")(app);
require("./routes/Sponsor.routes.js")(app);
require("./routes/SponsorKategori.routes.js")(app);
require("./routes/SponsorSuresi.routes.js")(app);
require("./routes/SponsorUcretBirimi.routes.js")(app);
require("./routes/SponsorSureTuru.routes.js")(app);
require("./routes/Takim.routes.js")(app);
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
//uploaders
require("./routes/Slider.routes")(app); 
require("./routes/BannerFile.routes")(app); 
require("./routes/NewsFile.routes")(app); 
require("./routes/OyuncuResimFile.routes")(app); 
require("./routes/ProfilResimFile.routes")(app); 
require("./routes/TakımFile.routes")(app); 
require("./routes/SponsorFile.routes")(app); 


io.on('connection', (socket) => {
  online++;
  console.log(`User Connected: ${socket.id}`);
  console.log(`Online: ${online}`);
  io.emit('visitor enters', online);

  socket.on('disconnect', () => {
    online--;
    console.log(`Socket ${socket.id} disconnected.`);
    console.log(`Online: ${online}`);
    io.emit('visitor exits', online);
  });

 

});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

 
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'User' to roles collection");
      });

      new Role({
        name: "Moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Admin' to roles collection");
      });


      new Role({
        name: "gozcu"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Gozcu' to roles collection");
      });


      new Role({
        name: "veli"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Veli' to roles collection");
      });

  

      new Role({
        name: "ilYoneticisi"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'IlYoneticisi' to roles collection");
      });


      new Role({
        name: "sponsor"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Sponsor' to roles collection");
      });

      new Role({
        name: "veliVeAntrenor"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Veli Ve Antrenor' to roles collection");
      });

      new Role({
        name: "antrenor"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Antrenor' to roles collection");
      });


    }
  });
}

 
