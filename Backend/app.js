const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/mainRouter.js");
const path = require("path");
//const { url } = require('inspector');

const app = express();

//CONEXION A DB
const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/marketplace";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(uri, options).then(
  () => {
    console.log("Conectado a DB");
  },
  err => {
    console.log("Error conectando a la base de datos: ", err);
  }
);

//MIDDLEWARE's
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Main API Router
app.use("/api", router);

const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

//PUERTO
app.set("puerto", process.env.PORT || 3002);
app.listen(app.get("puerto"), function() {
  console.log("Example app listening on port " + app.get("puerto"));
});
