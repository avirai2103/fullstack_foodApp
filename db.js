const mongoose = require("mongoose");
var mongoURL =
"mongodb+srv://arvindrai:arvindrai393@cluster0.8c0xuvv.mongodb.net/FoodApp?retryWrites=true&w=majority&appName=AtlasApp" ;
mongoose.connect(mongoURL, {useNewUrlParser: true,useUnifiedTopology:true,
useNewUrlParser:true})
var db = mongoose.connection ;
db.on('connected' , ()=> {
 console.log("MongoDB connected successfully");
})
db.on('error' , ()=> {
 console.log("MongoDB connection failed");
})
module.exports = mongoose
