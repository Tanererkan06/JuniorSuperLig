const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const session = require('express-session');
const bodyParser = require("body-parser");
const db = require("./src/models");
const xXssProtection = require("x-xss-protection");
const helmet = require("helmet");
const hpp = require("xss-clean");
const rateLimit = require("express-rate-limit");
var xssFilters = require('xss-filters');
var csrf = require('csurf')
var csrfProtection = csrf({ cookie: true })
const mongodb = require ('mongodb');
const app = express();
const path = require("path");

global.__basedir = __dirname;


  var corsOptions = {
  origin: "*"
};
 /*
   app.use(
  cors({
     origin:"https://dogsan.madilink.net/", corsOptions)),
      })
);  */


app.use(cors(corsOptions));    


app.use(bodyParser.json());

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
    name: "Juniorsuperlig-session",
    secret: "Juniorsuperligwebsite",  should use as secret environment variable
    httpOnly: true
  })
);  */


console.log(db.url);

db.mongoose
  .connect("mongodb+srv://Tanererkan06:Jm7o0mUG9SDDNpTZ@cluster0.ud1p5.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
       initial();

  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
const Role = db.role;





 app.get("/", (req, res) => {
  res.json({ message: "Juniorsuperlig Server is Working ! " });
});



app.use(helmet.hidePoweredBy());
app.use(hpp());
app.use(xXssProtection());
app.disable('x-powered-by');
app.use(cors());

require("./src/routes/auth.routes")(app);
require("./src/routes/user.routes")(app);


 const PORT = process.env.PORT || 3000;
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

        console.log("added 'user' to roles collection");
      }); 
      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
