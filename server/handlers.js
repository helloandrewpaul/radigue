require("dotenv").config();
const { MongoClient, ObjectID } = require("mongodb");
const { MONGO_URI } = process.env;
const fetch = require("isomorphic-fetch");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const savePreset = async (req, res) => {
  try {
    console.log("you ran savePreset");
    const client = await MongoClient(MONGO_URI, options);

    await client.connect();
    console.log("connected");

    const db = client.db("radiguedb");

    const result = await db.collection("parameterdb").insertOne(req.body);
    //assert if you wanna figure that out
    if (result) {
      res.status(201).json({ status: 201, message: "Successfully added" });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
  console.log("disconnected!");
};

const getSave = async (req, res) => {
  console.log(req.params);
  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("radiguedb");
    const query = { _id: ObjectID(req.params.id) };
    console.log({ querylookslike: query });

    const results = await db.collection("parameterdb").findOne(query);

    if (results) {
      res.status(201).json({ status: 201, data: results });
    }

    console.log(results);
  } catch (err) {
    console.log(err);
  }
};

//how to send store ? do I import it in here and then sendOne ???

module.exports = { savePreset, getSave };
