const express = require("express");
const Review = require("../models/review");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { restaurant, rating, reviewText } = req.body;
    const newReview = new Review({ restaurant, rating, reviewText });

    await newReview.save();
    res.status(201).json({ message: "Review saved successfully!" });
  } catch (error) {
    console.error("Error saving review:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
