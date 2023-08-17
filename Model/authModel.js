const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    gender:{type:String,require:true},
    status:{type:String,require:true}
})
const collection =mongoose.model("userModel",userSchema)

module.exports = collection;