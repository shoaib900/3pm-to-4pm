var collection = require("../Model/authModel");
var path = require("path")

// create,find,update,delete

const Create = async (req, res) => {
    const data = {
      username: req.body.username,
      email: req.body.email,
      gender:req.body.gender,
      status:req.body.status
    };
    await collection.insertMany([data])
    .then(() => {
      res.send({users: data})
    })
  };
  
  const Find = async (req, res) => {
         collection.find()
         .then(user => {
          res.send(user)
         })
         .catch( error => {
          console.log(error)
         })
  }

  const Update=()=> {};
  const Delete =() => {}


module.exports = { Create, Find,Update,Delete };