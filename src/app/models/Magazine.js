const mongoose = require('mongoose');
const MagazineSchema = new mongoose.Schema({
  title: { type: String, required: true },
  academicYear: { type: mongoose.Schema.Types.ObjectId, ref: 'AcademicYear', required: true },
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty', required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Magazine', MagazineSchema);