import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
  restaurantId: String,
  rating: Number,
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  ratings: [ratingSchema],
});

export default mongoose.model('User', userSchema);
