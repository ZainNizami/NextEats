const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/foods", (req, res) => {
  res.json([
    { id: 1, name: "Pizza" },
    { id: 2, name: "Burger" },
    { id: 3, name: "Sushi" },
  ]);
});

router.get("/search", async (req, res) => {
  try {
    const { term, location } = req.query;

    const response = await axios.get("https://api.yelp.com/v3/businesses/search", {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      },
      params: { term, location, limit: 5 },
    });

    res.json(response.data.businesses);
  } catch (error) {
    console.error("❌ Yelp API Error:", error.response?.data || error.message);
    console.log("🔍 FULL ERROR:", JSON.stringify(error.response?.data || error.message, null, 2));
    res.status(500).json({ error: "Failed to fetch from Yelp API" });
  }
});

module.exports = router;
