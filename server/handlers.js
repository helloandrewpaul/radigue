require("dotenv").config();
const { MongoClient, ObjectID } = require("mongodb");
const { MONGO_URI } = process.env;
const fetch = require("isomorphic-fetch");

require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//login would do a findOne and if it isn't found do an insertOne
//

const userLogin = async (req, res) => {
  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("radiguedb");
    const results = await db.collection("users").findOne(req.body);

    if (results) {
      res.status(200).json({ status: 200, message: "Welcome back" });
    } else {
      // console.log("insertOne");
      const newUser = await db.collection("users").insertOne(req.body);
      res.status(201).json({ status: 201, data: newUser.ops[0] });
    }
  } catch (err) {
    console.log(err.stack);
  }
};

const savePreset = async (req, res) => {
  try {
    // console.log(req.body);
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("radiguedb");
    const results = await db.collection("parameterdb").insertOne(req.body);
    if (results) {
      res.status(201).json({ status: 201, message: "Successfully added" });
      client.close();
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
    client.close();
  }
};

const getSave = async (req, res) => {
  try {
    const client = await MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("radiguedb");
    const query = { user: req.params.id };
    // console.log({ querylookslike: query });
    const results = await db.collection("parameterdb").find(query).toArray();

    if (results) {
      res.status(201).json({ status: 201, data: results });
      // console.log(data);
      client.close();
    }
  } catch (err) {
    client.close();
    console.log(err);
  }
};

const deletePreset = async (req, res) => {
  const { _id } = req.params;
  // console.log(_id);

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("radiguedb");

  try {
    const results = await db
      .collection("parameterdb")
      .deleteOne({ _id: ObjectID(_id) });
    // console.log(_id);
    res.status(204).json({ status: 204 });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
};

module.exports = { savePreset, getSave, userLogin, deletePreset };
