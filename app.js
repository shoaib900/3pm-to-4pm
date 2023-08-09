var express = require("express")
var app = express();
// var path = require("path")
// var mongoose = require("mongoose")

// app.use(express.json());
// app.use(express.urlencoded({extended:false}));
// app.use(express.static(path.join(__dirname,"/static")))

// mongoose.connect("mongodb+srv://shoaib:0000plm@cluster0.hud6pwx.mongodb.net/auth")
// .then(() => console.log("mongo DB is connected ..."))
// .catch((err) => console.log(err))

// const route = require("./routes/auth");
// app.use("/",route)

// app.get("/",(req,res) => {
//     res.sendFile(__dirname + "/static/index.html")
// })

var fs = require("fs");

// fs.mkdirSync("Shoaib")

// fs.writeFileSync("./Shoaib/info.txt","hello Mr. Shoaib ")

// fs.appendFileSync("./Shoaib/info.txt","🙌 thanks")

// var read = fs.readFileSync("Shoaib/info.txt","utf-8")
// console.log(read)

// fs.renameSync("Shoaib/info.txt","Shoaib/information.txt")

fs.unlinkSync("Shoaib/information.txt")
fs.rmdirSync("Shoaib")



app.listen(8080,console.log("server is running now..."))

















// fs.mkdirSync("Shoaib")

// fs.writeFileSync("Shoaib/info.txt","hello Mr. Shoaib Raza")

// fs.appendFileSync("Shoaib/info.txt",". how are you? whatsup ❤️")

//  var data = fs.readFileSync("Shoaib/info.txt","utf-8")
//  console.log(data)

// fs.renameSync("Shoaib/info.txt","Shoaib/information.txt");

// fs.unlinkSync("Shoaib/information.txt");

// fs.rmdirSync("Shoaib")