const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const PORT = 4000;

let app = express();

app.use(express.json());
app.use(morgan("dev"));

const { savePreset, getSave, userLogin, deletePreset } = require("./handlers");
const { createUser } = require("./firebase");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/"));

app.post("/save", savePreset);
app.get("/getSave/:id", getSave);
app.post("/login", userLogin);
app.delete("/delete/:_id", deletePreset);

app.get("/", (req, res) => {
  res.json({ hello: "hello" });
});

app.post("/users", createUser);

const server = app.listen(PORT, function () {
  console.info("🌍 Listening on port " + server.address().port);
});
