const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  anime: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userName: { type: String, required: true },
  userFoto: { type: String, default: 'default.png' },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', ReviewSchema);
