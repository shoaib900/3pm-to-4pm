var express = require("express")
var app = express();

require("dotenv").config();
var port =process.env.port || 8080

var path = require("path")
var connectDB = require("./DB/database")
connectDB();

app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"/static")))



const route = require("./routes/auth")
app.use("/",route)

app.get("/",(req,res) => {
    res.render(__dirname + "/static/index.ejs")
})

app.listen(port,console.log(`server is running now... ${port}`))

















// fs.mkdirSync("Shoaib")

// fs.writeFileSync("Shoaib/info.txt","hello Mr. Shoaib Raza")

// fs.appendFileSync("Shoaib/info.txt",". how are you? whatsup ❤️")

//  var data = fs.readFileSync("Shoaib/info.txt","utf-8")
//  console.log(data)

// fs.renameSync("Shoaib/info.txt","Shoaib/information.txt");

// fs.unlinkSync("Shoaib/information.txt");

// fs.rmdirSync("Shoaib")