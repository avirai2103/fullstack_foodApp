const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
 id : {type: Number , require} ,
 name : {type: String , require} ,
 password : {type: String , require} ,

},
{
 timestamps: true,
})
const userModel = mongoose.model("user",userSchema);
module.exports = userModel;