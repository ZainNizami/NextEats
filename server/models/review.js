const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  restaurant: { type: String, required: true },
  rating: { type: Number, required: true },
  reviewText: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  userId: { type: String }, // Optional for future accounts
});

module.exports = mongoose.model("Review", reviewSchema);
