const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
    facilityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Facility' },
    userName: { type: String, required: true, unique: true },
    passWord: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    fullName: { type: String, required: true }
  });
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;