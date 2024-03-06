const mongoose = require('mongoose');

// Define Role Schema
const roleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;