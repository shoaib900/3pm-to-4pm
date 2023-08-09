var collection = require("../Model/authModel");
var path = require("path")

const signup = async (req, res) => {
    const data = {
      name: req.body.username,
      password: req.body.password,
    };
    await collection.insertMany([data]);
    res.sendStatus(200);
  };
  
  const login = async (req, res) => {
      try {
        const check = await collection.findOne({ name: req.body.username });
      if (check.password === req.body.password) {
        res.sendStatus(200);
      } else {
        res.send("wrong password");
      }
    } catch (error) {
      res.send("wrong details");
    }
  };

module.exports = { signup, login };