var mongoose = require("mongoose")

const connectDB =async() =>{
    try {
        const con = await mongoose.connect(process.env.DB,{
            usenewUrlParser:true,
        })
        console.log(`DB is running now... ${con.connection.host} `)
        
    } catch (error) {
        console.log(error);
        process.exit(1); 
    }
}
module.exports = connectDB;
