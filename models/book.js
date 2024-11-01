const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  isAvailable: { type: Boolean, default: true },
  borrowedCount: { type: Number, default: 0 }  // For analytics on most borrowed books
});

module.exports = mongoose.model('Book', bookSchema);

