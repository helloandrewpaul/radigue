const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const PORT = 4000;

let app = express();

app.use(express.json());
app.use(morgan("dev"));

const { savePreset, getSave } = require("./handlers");

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/"));

app.post("/save", savePreset);
app.get("/getSave/:id", getSave);

app.get("/", (req, res) => {
  res.json({ hello: "hello" });
});

const server = app.listen(PORT, function () {
  console.info("🌍 Listening on port " + server.address().port);
});
