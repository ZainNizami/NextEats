import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/rate', async (req, res) => {
  const { username, restaurantId, rating } = req.body;

  if (!username || !restaurantId || rating == null) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    let user = await User.findOne({ username });
    if (!user) {
      user = new User({ username, ratings: [] });
    }

    const existingRating = user.ratings.find(r => r.restaurantId === restaurantId);
    if (existingRating) {
      existingRating.rating = rating;
    } else {
      user.ratings.push({ restaurantId, rating });
    }

    await user.save();
    res.json({ message: 'Rating saved', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save rating' });
  }
});

export default router;
