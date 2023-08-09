var express = require("express")
var app = express();
var path = require("path")
var mongoose = require("mongoose")

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"/static")))

mongoose.connect("mongodb+srv://shoaib:0000plm@cluster0.hud6pwx.mongodb.net/auth")
.then(() => console.log("mongo DB is connected ..."))
.catch((err) => console.log(err))

const route = require("./routes/auth");
app.use("/",route)

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/static/index.html")
})

app.listen(8080,console.log("server is running now..."))