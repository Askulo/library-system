const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  borrowedBooks: [{
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    borrowedAt: { type: Date, default: Date.now },
    returned: { type: Boolean, default: false }
  }]
});

module.exports = mongoose.model('Member', memberSchema);
