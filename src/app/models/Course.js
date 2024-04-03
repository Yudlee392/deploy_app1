const mongoose = require('mongoose');
const Course = new mongoose.Schema({
  name: {type:String, maxLength:255},
  description: {type:String, maxlength:600},
  image: {type:String, maxlength:255},
  createdAt: {type:Date, default:Date.now},
  updateAt: {type:Date, default:Date.now},
});
module.exports=mongoose.model('Course', Course);
